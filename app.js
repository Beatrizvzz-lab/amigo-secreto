
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
                // limpa a lista e atualiza na tela para melehor visuabilidade
                amigos = [];
                atualizarLista();
            } else {
                alert('Adicione pelo menos um nome antes de sortear!');
            }
        }

        // função para disparar confetes
        function dispararConfete() {
            var count = 200;
            var defaults = {
                origin: { y: 0.7 }
            };
            function fire(particleRatio, opts) {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            }
            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });
        }