let jogos = [];
const endpointDaAPI = "jogos.json";

getBuscarJogosDaAPI();

async function getBuscarJogosDaAPI() {
  const respost = await fetch(endpointDaAPI);
  jogos = await respost.json();
  exibirJogosNaTela(jogos.jogos);
}
