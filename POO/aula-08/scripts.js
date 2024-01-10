console.log("===== AULA 08 =====");

async function carregarDados() {
  const resposta = await fetch("./dados.json");
  const dados = await resposta.json();

  console.log(dados);
}

carregarDados();