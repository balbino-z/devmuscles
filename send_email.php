<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recupere a mensagem do chat do corpo da solicitação POST
    $message = $_POST["message"];

    // Seu endereço de email
    $from = "balbinobarretoneide@gmail.com";

    // Email de destino (onde você deseja receber as mensagens)
    $to = "oviniciusbalbino@gmail.com";

    // Assunto do email
    $subject = "Nova mensagem do chat";

    // Cabeçalhos do email
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";

    // Envie o email
    mail($to, $subject, $message, $headers);
}
?>
