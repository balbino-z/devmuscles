<?php
session_start();

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
    $password = $_POST["password"];

    // Verificar o login
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user["password"])) {
        // Login bem-sucedido, redirecionar para a página apropriada com base no tipo de usuário
        if ($user["type"] === "trainer") {
            header("Location: profile_trainer.php");
        } elseif ($user["type"] === "client") {
            header("Location: profile_client.php");
        } else {
            die("Tipo de usuário desconhecido.");
        }
        exit();
    } else {
        $loginError = "Nome de usuário ou senha incorretos.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <div class="background-img">
            <img src="img/rem.jpg" alt="Imagem de Fundo">
        </div>
        <div class="form">
            <h2>Login</h2>
            <form method="post">
                <label for="username">Nome de usuário:</label>
                <input type="text" name="username" required>

                <label for="password">Senha:</label>
                <div class="password-container">
                    <input type="password" name="password" id="password" required>
                    <button type="button" id="show-password">👁</button>
                </div>

                <a href="php/esqueceu-senha.php" class="forgot-password">Esqueceu Sua Senha?</a>

                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
    <script src="login.js"></script>
</body>
</html>
