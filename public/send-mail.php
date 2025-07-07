<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: application/json');
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method allowed']);
    exit;
}

// Get form data from JSON
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
    exit;
}

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$subject = $input['subject'] ?? '';
$message = $input['message'] ?? '';

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
    exit;
}

require_once "config.php";

try {
    loadEmailConfig();
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Configuration error']);
    exit;
}

require "../../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
    $mail->Subject = "Kontakt z webu: " . $subject;
    $mail->Body = "Meno: " . $name . "\n";
    $mail->Body .= "Email: " . $email . "\n";
    $mail->Body .= "Predmet: " . $subject . "\n\n";
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
        'message' => 'Chyba pri odosielaní emailu. Skúste to neskôr.'
    ]);
    
    error_log("Email error: " . $e->getMessage());
}
?>