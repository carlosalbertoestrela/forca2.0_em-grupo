# forca2.0_em grupo

  Jogo da Forca

         Pedir para o usuário digitar uma letra (mostrar também quais foram as letras que ele já usou)
         Verificar se esta letra já foi usada
         Verificar se esta letra NÃO É UMA LETRA
             Número
             Não digitou nada (undefined)
             Palavra (pode ser entendido como o chute da palavra toda)
                 "Opa, palavra digitada não equivale à palavra sorteada"
                     Permitir que o cara digite algo para reiniciar
                 "Parabéns, você adivinhou a palavra sorteada"
         ----> Verficar se esta letra pertence à palavra sorteada <----
             Se sim, mostra como a palavra está por enquanto (LETRA PERTENCE À PALAVRA)
             Se não, mostra como a palavra está por enquanto e mostra a forca (LETRA NÃO PERTENCE À PALAVRA)
             Caso o usuário já tenha descoberto a palavra toda, dê os parabéns!
             Caso o usuário tenha perdido todas as partes do corpo na forca, já elvis...
             De um jeito ou de outro permitir que o usuário REINICIE O JOGO DO ZERO
                 Sortear outra palavra
                 Repete o loop principal
                 (...) 

         OBS1.: Existirá um looping externo (referente à partida, ou seja, à nova palavra)
         e um looping interno (referente ao jogo principal, no qual vai estar toda a lógica de verificação e casos possíveis)
         OBS2.: SEMPRE QUE POSSÍVEL mostrar as letras já usadas e a forca em si

         Exemplo de código de validação no jogo da forca
         let letrasUsadas = ['A', 'E', 'O'];
         let letra = prompt("Digite a letra desejada:");
         while(letrasUsadas.includes(letra)) {
             letra = prompt("Letra inválida!!! Digite a letra novamente:");
         }

         console.log("Letra válida: ", letra);
 
