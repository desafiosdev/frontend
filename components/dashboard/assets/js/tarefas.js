const resulta = document.getElementById('resultado');
const input = document.querySelector('.txt-input');
const botao = document.querySelector('.botao')

let cliqueEnter;

function criaLista() {
    const li = document.createElement('li');
    return li
}

function criaTarefa(texto) {
    const list = criaLista();
    list.innerHTML = texto;
    resulta.appendChild(list);
    salvartarefas();

}

function Clique() {
    if (!input.value) return;
    criaTarefa('<br />' + ' 📃 ' + '<strong>' + input.value + '</strong> ');


}

function apagar() {
    let recarregar = document.querySelector('.botao-apagar')
    recarregar.addEventListener('click', function() {
        location.reload(setTimeout(1000));
    });
    confirm('voce realmente deseja apagar suas tarefas ? ');

}


function salvartarefas() {
    const listTask = resulta.querySelectorAll('li');
    const listOfTask = [];


    for (let tarefa of listTask) {
        let textTask = tarefa.innerText;
        textTask = textTask.replace('Apagar', ' ').trim();
        listOfTask.push(textTask);
    }

    const taskJSON = JSON.stringify(listOfTask);
    localStorage.setItem('task', taskJSON);
}

function addTasksave() {
    const task = localStorage.getItem('task');
    const listOfTask = JSON.parse(task);
    console.log(listOfTask);

    for (let tarefa of listOfTask) {
        createTask();
    }
}
addTasksave();