async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();

    var estado = document.getElementById("estado");
    var logradouro = document.getElementById("endereco");
    var cidade = document.getElementById("cidade");
    var bairro = document.getElementById("bairro");

    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;

    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = "CEP inválido";
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
