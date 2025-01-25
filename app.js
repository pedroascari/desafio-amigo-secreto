//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica
//para resolver o problema.

//Funcionalidades:
    // Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao
    // clicar em "Adicionar".
    // Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
    // Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
    // Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let amigos=[];

function adicionarAmigo() {
    let nomesEscolhidos = document.getElementById ('amigo').value;
    console.log(nomesEscolhidos);
    
    if (nomesEscolhidos === ''){
        alert ('Por favor, digite um nome.');
    } else {
        amigos.push(nomesEscolhidos);
        console.log(amigos);
        mostrarAmigos();
        limparCampo();
    }
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById ('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement ('li');
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function validarAmigos(){
    if (amigos.length === 0) {
        alert ('Nenhum amigo foi selecionado.');
        return;
    } if (amigos.length < 2) {
        alert ('É necessário escolher ao menos 2 amigos.');
        return;
    }
}

function limparCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function sortearAmigo() {
    let posicaoDoAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[posicaoDoAmigo];
    console.log ('O amigo sorteado é ',amigoSorteado);
    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `<li> O amigo secreto é ${amigoSorteado}`;
    limparCampo()    
    }