<?php
$con = mysqli_connect("localhost", "root", "", "jogos");
$dados = array();
$dados['erro'] = false;
$dados['message'] = "";
$sql = "SELECT * FROM jogos";
$result = mysqli_query($con, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($jogo = mysqli_fetch_array($result)) {
        $dados['jogos'][] = array(
            'id' => $jogo['id'],
            'titulo' => $jogo['titulo'],
            'imagem' => $jogo['imagem'],
            'preco' => $jogo['preco'],
            'quantidade' => $jogo['quantidade'],
            'categoria' => $jogo['categoria']
        );
    }
} else {
    $dados['erro'] = true;
    $dados['message'] = "Nenhum jogo cadastrado!";
}
echo json_encode($dados);