const elementoParaInserirJogosNaLista = document.getElementById("listaJogos");

function exibirJogosNaTela(listaDeJogos) {
  elementoParaInserirJogosNaLista.innerHTML = "";
  listaDeJogos.forEach((jogo) => {
    elementoParaInserirJogosNaLista.innerHTML += `
        <div class="jogo" data-${jogo.titulo}>
        <a href="paginajogo.html">
        <img class="jogo__imagem" src="${jogo.imagem}" alt="${jogo.titulo}" />
        </a>
        <h2 class="jogo__titulo">${jogo.titulo}</h2>
        <p class="jogo__preco" id="preco">R$${jogo.preco}<a ><img class="jogo__carrinho" src="./images/addcart.png" alt="Adicionar ao carrinho"/></p><a/>
        </div>
        `;
  });
}
