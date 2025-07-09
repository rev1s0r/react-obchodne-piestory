<?php
require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: application/json');
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
    exit;
}

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$message = $input['message'] ?? '';
$honeypot = $input['honeypot'] ?? '';

if (!empty($honeypot)) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Spam detected']);
    exit;
}

$spamKeywords = ['viagra', 'casino', 'loan', 'money', 'winner', 'congratulations', 'click here', 'buy now'];
$messageWords = strtolower($message . ' ' . $name);
foreach ($spamKeywords as $keyword) {
    if (strpos($messageWords, $keyword) !== false) {
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Spam content detected']);
        exit;
    }
}

if (empty($name) || empty($email) || empty($message)) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Všetky polia sú povinné']);
    exit;
}

try {
    loadEmailConfig();
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Configuration error']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = getenv('SMTP_HOST');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = getenv('SMTP_PORT');
    $mail->Username = getenv('SMTP_USERNAME');
    $mail->Password = getenv('SMTP_PASSWORD');
    
    $mail->setFrom(
        getenv('EMAIL_FROM'), 
        getenv('EMAIL_FROM_NAME') ?: 'Kontaktný formulár'
    );
    $mail->addAddress(
        getenv('EMAIL_TO'), 
        getenv('EMAIL_TO_NAME') ?: 'Obchodné priestory'
    );
    $mail->addReplyTo($email, $name);
    
    $mail->isHTML(false);
    $mail->Subject = "Kontakt z webu";
    $mail->Body = "Meno: " . $name . "\n";
    $mail->Body .= "Email: " . $email . "\n\n";
    $mail->Body .= "Správa:\n" . $message;
    
    $mail->send();
    
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'success',
        'message' => 'Email bol úspešne odoslaný!'
    ]);
    
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Chyba pri odosielaní emailu',
        'debug' => $e->getMessage() 
    ]);
    error_log("Email error: " . $e->getMessage());
}
?>