let btnOrdenarPorPreco = document.getElementById("btnPreco");
btnOrdenarPorPreco.addEventListener("click", ordernarJogosPorPreco);

function ordernarJogosPorPreco() {
  jogosOrdenados = jogos.jogos.sort((a, b) => a.preco - b.preco);
  exibirJogosNaTela(jogosOrdenados);
}
