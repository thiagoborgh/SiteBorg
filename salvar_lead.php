<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obter dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];

    // Validar campos (adicione mais validações conforme necessário)
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo json_encode(array("success" => false, "message" => "Preencha todos os campos obrigatórios."));
        exit;
    }

    // Abrir arquivo CSV (ou criar se não existir)
    $arquivo = fopen("leads.csv", "a");

    // Escrever dados no CSV
    fputcsv($arquivo, array($nome, $email, $telefone, $mensagem));

    // Fechar arquivo
    fclose($arquivo);

    echo json_encode(array("success" => true, "message" => "Lead salvo com sucesso!"));
} else {
    echo json_encode(array("success" => false, "message" => "Método de requisição inválido."));
}
// api/salvar_lead.php

// Obter dados do formulário
$nome = $_POST["nome"];
$email = $_POST["email"];
// ... (processar os dados, salvar em arquivo ou banco de dados)

// Retornar resposta JSON
echo json_encode(array("success" => true, "message" => "Lead salvo com sucesso!"));
?>

