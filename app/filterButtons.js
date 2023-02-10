const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarJogos));

function filtrarJogos() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let jogosFiltrados = jogos.jogos.filter(
    (jogo) => jogo.categoria == categoria
  );
  exibirJogosNaTela(jogosFiltrados);
}
