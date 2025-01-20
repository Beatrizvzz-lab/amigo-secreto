
let amigos = [];

        
        function adicionarAmigo() {
            let nome = document.getElementById('amigo').value;
            if(nome === "") {
                alert('Por favor, insira um nome.');
                return;
            }
            amigos.push(nome); 
            document.getElementById('amigo').value = '';
            atualizarLista();
        }
        function atualizarLista() {
            const lista = document.getElementById('listaAmigos');
            lista.innerHTML = ""; 
            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }
        function sortearAmigo() {
            if (amigos.length > 0) {
                const indiceAleatorio = Math.floor(Math.random() * amigos.length);
                const sorteado = amigos[indiceAleatorio];
                document.getElementById('resultado').innerHTML = `O nome sorteado foi: ${sorteado}`;
            } else {
                alert('Adicione pelo menos um nome antes de sortear!');
            }
        }