<?php
// Basic error handling
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Error: Only POST method allowed");
}

// Validate required fields
if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["subject"]) || empty($_POST["message"])) {
    die("Error: All fields are required");
}

// Get form data
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Load configuration
require_once "config.php";

try {
    loadEmailConfig();
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}

// Load PHPMailer
require "../../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = getenv('SMTP_HOST');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = getenv('SMTP_PORT');
    $mail->Username = getenv('SMTP_USERNAME');
    $mail->Password = getenv('SMTP_PASSWORD');
    
    // Recipients
    $mail->setFrom(
        getenv('EMAIL_FROM'), 
        getenv('EMAIL_FROM_NAME') ?: 'Kontaktný formulár'
    );
    $mail->addAddress(
        getenv('EMAIL_TO'), 
        getenv('EMAIL_TO_NAME') ?: 'Obchodné priestory'
    );
    $mail->addReplyTo($email, $name);
    
    // Content
    $mail->isHTML(false);
    $mail->Subject = "Kontakt z webu: " . $subject;
    $mail->Body = "Meno: " . $name . "\n";
    $mail->Body .= "Email: " . $email . "\n";
    $mail->Body .= "Predmet: " . $subject . "\n\n";
    $mail->Body .= "Správa:\n" . $message;
    
    // Send email
    $mail->send();
    echo "<h2>✅ Email bol úspešne odoslaný!</h2>";
    echo '<p><a href="javascript:history.back()">← Späť na formulár</a></p>';
    
} catch (Exception $e) {
    echo "<h2>❌ Chyba pri odosielaní emailu</h2>";
    echo "<p>Skúste to prosím neskôr alebo nás kontaktujte priamo.</p>";
    echo '<p><a href="javascript:history.back()">← Späť na formulár</a></p>';
    
    // Log error for debugging (optional)
    error_log("Email error: " . $e->getMessage());
}
?>


