<?php
// Configuration loader for email functionality

function loadEnv($filePath) {
    if (file_exists($filePath)) {
        $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            list($name, $value) = explode('=', $line, 2);
            putenv(trim($name) . '=' . trim($value));
        }
        return true;
    }
    return false;
}

function loadEmailConfig() {
    // Try to load .env file
    $envLoaded = loadEnv(__DIR__ . "/../../.env") 
        || loadEnv(__DIR__ . "/../../../.env") 
        || loadEnv(__DIR__ . "/../.env") 
        || loadEnv(__DIR__ . "/.env");
    
    if (!$envLoaded) {
        throw new Exception("Configuration file not found. Please contact administrator.");
    }
    
    // Verify required environment variables are set
    $requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'EMAIL_FROM', 'EMAIL_TO'];
    foreach ($requiredVars as $var) {
        if (!getenv($var)) {
            throw new Exception("Missing configuration for $var. Please contact administrator.");
        }
    }
    
    return true;
}
?>