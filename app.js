
let amigos = [];

function adicionarAmigo(){
    document.querySelector('button-add');
    let nome = document.getElementById('amigo').value;
    if(nome){
      amigos.push(nome); 
      alert('O nome foi adicionado!')
      atualizarLista();
      limparCampo();
    }else{
        alert ('Por favor, adicione um nome válido!')
    }
};

function limparCampo() {
    amigos = document.querySelector('#amigo');
    amigos.value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length > 0){
        let sorteio = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = `O nome sorteado foi ${sorteio}`;
    }else {
        alert('Adicione pelo menos um nome antes de sortear!');
    }
    
};

