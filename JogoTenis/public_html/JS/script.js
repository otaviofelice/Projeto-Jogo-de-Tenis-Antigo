


        const campo = document.getElementById('campo');
        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');
        const ball = document.getElementById('bola');

        let bolaX = 300;
        let bolaY = 150;
        let velocidadeBolaX = 3;
        let velocidadeBolaY = 3;

        let player1Y = 120;
        let player2Y = 120;
        const velocidadeJogador = 10; 

        let pontuacaoplayer1 = 0;
        let pontuacaoplayer2 = 0;
        let limitePontos = 5;

          alert("Jogo de tenis, o jogador que atingir 5 pontos primeiro será o vencedor");
        
        function funcionamento(){
          
            bolaX += velocidadeBolaX;
            bolaY += velocidadeBolaY;
            
            if (bolaY <= 0 || bolaY >= 280){
                velocidadeBolaY = -velocidadeBolaY;
            }

         
            if (bolaX <= 20 && bolaY > player1Y && bolaY < player1Y + 80) {
                velocidadeBolaX = -velocidadeBolaX;
            }

            if (bolaX >= 560 && bolaY > player2Y && bolaY < player2Y + 80) {
                velocidadeBolaX = -velocidadeBolaX;
            }

            
            if (bolaX < 0) {
                pontuacaoplayer2++;
                resetarJogo();
            }

            if (bolaX > 600) {
                pontuacaoplayer1++;
                resetarJogo();
            }

            
            if (keys && keys[87] && player1Y > 0) player1Y -= velocidadeJogador;
            if (keys && keys[83] && player1Y < 220) player1Y += velocidadeJogador;
            if (keys && keys[38] && player2Y > 0) player2Y -= velocidadeJogador;
            if (keys && keys[40] && player2Y < 220) player2Y += velocidadeJogador;

            
            ball.style.left = bolaX + 'px'; 
            ball.style.top = bolaY + 'px';

            
            player1.style.top = player1Y + 'px';
            player2.style.top = player2Y + 'px';

            
            document.getElementById('pontos').innerHTML = `Player 1: ${pontuacaoplayer1} - Player 2: ${pontuacaoplayer2}`;
            verificarVitoria();
        }
        
        
        function verificarVitoria(){
           
            if (pontuacaoplayer1 === limitePontos) {
             alert("o jogo acabou, player 1 venceu!!");
             jogarNovamente();
             
    }else if (pontuacaoplayer2 === limitePontos) {
             alert("o jogo acabou, player 2 venceu!!");
            jogarNovamente();
            
            } 
      
    }
     
        function jogarNovamente(){
        
            let valor = prompt("Deseja jogar novamente?(S ou N)");

    valor = valor.toUpperCase();
     while (valor !== 'S' && valor !== 'N') {
        valor = prompt("Valor inválido. Por favor, digite apenas S ou N:");
        valor = valor.toUpperCase();
    }
        
        if (valor === 'S') {
         recomecar();
        
    }else if (valor === 'N') {
        
        alert("fim de jogo, ao apertar em ok a janela atual fechara!");
        window.close();
    }

   
    }
   
        function resetarJogo() {
            bolaX = 300;
            bolaY = 150;
            velocidadeBolaX = 3; 
            velocidadeBolaY = 3;
        }
        
        function recomecar(){
            pontuacaoplayer1 = 0;
            pontuacaoplayer2 = 0;
            player1Y = 120;
            player2Y = 120;
            resetarJogo();
            
        }
        

        let keys = {};
        window.addEventListener('keydown', function (e) {
            keys[e.keyCode] = true;
        });

        window.addEventListener('keyup', function (e) {
            delete keys[e.keyCode];
        });

        setInterval(funcionamento, 15);