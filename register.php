<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados (substitua as credenciais)
    $dsn = "mysql:host=localhost;dbname=gym";
    $username = "root";
    $password = "";

    try {
        $conn = new PDO($dsn, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Erro de conexão: " . $e->getMessage());
    }

    // Coletar dados do formulário
    $username = $_POST["username"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Criptografar a senha
    $type = $_POST["type"]; // 'trainer' ou 'client'

    // Inserir dados na tabela
    $sql = "INSERT INTO users (username, password, type) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$username, $password, $type]);

    // Redirecionar para a página de login
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
<div class="container">
    <div class="image">
        <div class="image-content">
            <img src="img/regi.png" alt="">
        </div>
        </div>
        <div class="form">
            <h2>Registro</h2>
            <form method="post">
                <label for="username">Nome de usuário:</label>
                <input type="text" name="username" required>

                <label for="password">Senha:</label>
                <input type="password" name="password" required>

                <label for="type">Tipo de usuário:</label>
                <select name="type">
                    <option value="trainer">Personal Trainer</option>
                    <option value="client">Usuário Comum</option>
                </select>

                <button type="submit">Registrar</button>
            </form>
        </div>
    </div>
    <script src="register.js"></script>
</body>
</html>
