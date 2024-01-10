console.log('===== Lista de Tarefas =====');

const listaDeTarefas = new ListaDeTarefas();

function adicionarTarefa() {
  const inputTitulo = document.getElementsByName("titulo")[0];
  const inputDescricao = document.getElementsByName("descricao")[0];

  const novaTarefa = new Tarefa(inputTitulo.value, inputDescricao.value);
  listaDeTarefas.adicionarTarefas(novaTarefa);

  listarTarefasPendentes();

  inputTitulo.value = "";
  inputDescricao.value = "";
}

function concluirTarefa(marcado, id) {
  if (marcado) {
    listaDeTarefas.concluirTarefa(id);
  }
  listarTarefasPendentes();
  listarTarefasConcluidas();
}

function montarHtmlTarefaPendente(tarefaPendente) {
  const ul = document.getElementById("pendentes").getElementsByTagName("ul")[0];
  const li = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");

  input.type = "checkbox";
  input.onchange = (event) => concluirTarefa(event.target.checked, tarefaPendente.id);

  const em = document.createElement("em");
  em.innerText = tarefaPendente.titulo;

  label.appendChild(input);
  label.appendChild(em);

  li.appendChild(label);

  ul.appendChild(li);
}

function listarTarefasPendentes() {
  const ul = document.getElementById("pendentes").getElementsByTagName("ul")[0];
  ul.innerHTML = "";

  for (let tarefaPendente of listaDeTarefas.pendentes) {
    montarHtmlTarefaPendente(tarefaPendente);
  }
}

function montarHtmlTarefaConcluida(tarefaConcluida) {
  const ul = document.getElementById("concluidas").getElementsByTagName("ul")[0];
  const li = document.createElement("li");
  const em = document.createElement("em");
  em.innerText = tarefaConcluida.titulo;

  const span = document.createElement("span");
  span.innerText = tarefaConcluida.dataConclusao;

  li.appendChild(em);
  li.appendChild(span);

  ul.appendChild(li);
}

function listarTarefasConcluidas() {
  const ul = document.getElementById("concluidas").getElementsByTagName("ul")[0];
  ul.innerHTML = "";

  for (let tarefaConcluida of listaDeTarefas.concluidas) {
    montarHtmlTarefaConcluida(tarefaConcluida);
  }
}

const pagarInternet = new Tarefa("Pagar a internet");
const pagarCartao = new Tarefa("Pagar a fatura", "Cartão NuBank");

listaDeTarefas.adicionarTarefas(pagarInternet);
listaDeTarefas.adicionarTarefas(pagarCartao);

listarTarefasPendentes();
listarTarefasConcluidas();
