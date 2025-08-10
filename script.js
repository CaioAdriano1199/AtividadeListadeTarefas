let Tarefaslista = [];
indicemanipulado = null;
let modalE = document.getElementById("MenuEditarTarefa");
function adicionarTarefa() {
    const conteudoinputcriar = document.getElementById('ConteudoTarefa');
    let descricao = conteudoinputcriar.value;
    Tarefaslista.push(descricao);

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

function EditarTarefa() {
    let novadescricao = document.getElementById("EdicaoTarefa").value;
    Tarefaslista[indicemanipulado] = novadescricao;
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
        text += `<div class=Tarefa><h3 onclick="checkTarefa(this)">${Tarefaslista[i]}</h3><div class= botoes><button onclick=AbrirEditarTarefa(${i}) class= BotaoTarefa>✏️</button><button onclick=DeletarTarefa(${i}) class= BotaoTarefa>🗑️</button></div></div>`;
    }
    text += "</div>";

    document.getElementById("tarefas").innerHTML = text;
}

function checkTarefa(texto) {
    texto.classList.toggle("check");
}

function DeletarTarefa(Tarefa) {
    Tarefaslista.splice(Tarefa, 1);
    localStorage.setItem('Tarefaslista', JSON.stringify(Tarefaslista));
    listarTarefa();
}

var modal = document.getElementById("MenuNovaTarefa");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
    modalE.style.display = "none";
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