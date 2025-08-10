let Tarefaslista = [];
indicemanipulado = null;
let modalE = document.getElementById("MenuEditarTarefa");
function adicionarTarefa() {
    const conteudoinputcriar = document.getElementById('ConteudoTarefa');
    let descricao = conteudoinputcriar.value;
    Tarefaslista.push({ texto: descricao, marcado: false });

    listarTarefa();
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
    conteudoinputcriar.value = "";
    modal.style.display = "none";
}

window.onload = function () {
    const arrayRecuperadoString = localStorage.getItem('Tarefaslista');
    const arrayRecuperado = JSON.parse(arrayRecuperadoString);
    Tarefaslista = arrayRecuperado || [];
    listarTarefa();
}

function SalvarTarefas() {
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
    const estilo = texto.classList.contains('check');
    localStorage.setItem('checkAtivo', JSON.stringify(estilo));
}

function EditarTarefa() {
    let novadescricao = document.getElementById("EdicaoTarefa").value;
    Tarefaslista[indicemanipulado].texto = novadescricao;
    listarTarefa();
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
    modalE.style.display = "none";

}

function AbrirEditarTarefa(indice) {
    indicemanipulado = indice;

    modalE.style.display = "block"
    let tarefa = Tarefaslista[indice];
    document.getElementById("EdicaoTarefa").value = tarefa;

}

function listarTarefa() {
    let fLen = Tarefaslista.length;

    let text = "<div class=ListaTarefas>";
    for (let i = 0; i < fLen; i++) {
        const tarefa = Tarefaslista[i];
        const classeCheck = tarefa.marcado ? "check" : "";
        text += `<div class=Tarefa><h3 onclick="checkTarefa(this,${i})"class="${classeCheck}">${tarefa.texto}</h3><div class= botoes><button onclick=AbrirEditarTarefa(${i}) class= BotaoTarefa>✏️</button><button onclick=DeletarTarefa(${i}) class= BotaoTarefa>🗑️</button></div></div>`;
    }
    text += "</div>";

    document.getElementById("tarefas").innerHTML = text;
}

function checkTarefa(texto, index) {
    texto.classList.toggle("check");
    Tarefaslista[index].marcado = texto.classList.contains("check");
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
}

function DeletarTarefa(Tarefa) {
    Tarefaslista.splice(Tarefa, 1);
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
    listarTarefa();
}

var modal = document.getElementById("MenuNovaTarefa");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

function fecharedit() {
    modalE.style.display = "none";
}

btn.onclick = function () {
    modal.style.display = "block";

}

span.onclick = function () {
    modal.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.onclick = function (event) {
    if (event.target == modalE) {
        modalE.style.display = "none";
    }
}