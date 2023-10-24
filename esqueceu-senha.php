<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Redefinir Senha</title>

    <link rel="stylesheet" href="esqueceu-senha.css">

   

</head>

<body>

    <div class="container">

        <div class="background-img">

            <img src="img/gym3.jpg" alt="Background Image">

        </div>

        <div class="form">

            <h2>Redefinir Senha</h2>

            <form method="post">

                <label for="username">Nome de Usuário Antigo:</label>

                <input type="text" id="username" name="username" required>

                <label for="password">Senha:</label>

                <div class="password-container">

                    <input type="password" name="password" id="password" required>

                    <button type="button" id="show-password">👁</button>

                </div>

                <button type="submit">Redefinir Senha</button>

                <a class="forgot-password" href="login.php">Voltar para a tela de login</a>

            </form>

           

        </div>

    </div>

    <script src="esqueceu-senha.js"></script>

</body>

</html>