const sort_Categoria_Palavra = (objeto = {}) => {
    //Carlos Alberto - retorna um array com tema na posição 0 e palavra na posição 1;
    const aleatorio = (array = []) => {
        max = array.length;
        return Math.floor(Math.random() * (max - 0) + 0);
    }
    const tema = Object.keys(objeto);
    const categoria = tema[aleatorio(tema)];
    const elementos = objeto[categoria];
    const elemento = elementos[aleatorio(elementos)];

    return [categoria.toUpperCase(), elemento.toUpperCase()]
}

// Rafael - função de tratamento da palavra sorteada
function separaCaracteres(palavra = "") {
    let caracteresPalavraSorteada = "";

    for (i in palavra) {
        if (palavra[i] != " ") {
            caracteresPalavraSorteada = caracteresPalavraSorteada + "_";
        } else {
            caracteresPalavraSorteada = caracteresPalavraSorteada + " ";
        }

    }
    return caracteresPalavraSorteada.split('');
}
function tiraVida(tentativas) {
    //Murilo
    // essa função serve para alterar a img da forca de acordo com o numero de tentativas

    switch(tentativas){
        case 5:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca1.png')";
            break;
        case 4:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca2.png')";
            break;
        case 3:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca3.png')";
            break;
        case 2:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca4.png')";
            break;
        case 1:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca5.png')";
            break;
        case 0:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca6.png')";
            break;
        default:
            document.getElementById("forca__img").style.background = "url('./assets/images/forca0.png')";
            break;
    }
    };


    function letraUsada(clicada) {

        // essa função deve receber o id da tecla clicada para alterar os atributos CSS dela, impedindo o uso repetido desta tecla
        

        document.getElementById(clicada).style.pointerEvents = "none";
        document.getElementById(clicada).style.backgroundColor = "rgba(89, 69, 62, 0.8)";
        document.getElementById(clicada).style.cursor = "not-allowed";
    };

fetch("scripts/teste.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let vida = 6;
        tiraVida(vida)
        let listaPalavras = data;
        const temaPalavra = sort_Categoria_Palavra(listaPalavras);
        console.log(temaPalavra);
        let palavra = temaPalavra[1];
        let palavraSecreta = separaCaracteres(palavra);
        let tema = temaPalavra[0];
        console.log(palavraSecreta)
        // mostraNaTela(tema, palavraSecreta);
        const mostraCategoria = document.getElementById("categoria__sorteada");
        mostraCategoria.innerHTML = `${tema}`;
        const palavraExibida = document.getElementById('palavra__escondida');
        palavraExibida.innerHTML = `${palavraSecreta.join('')}`;
        console.log(palavraSecreta)

        function verificaLetra(letra = '', p = palavra, pS = palavraSecreta) {

            let dentro = false;
            for (i in palavra) {
                if (p[i] == letra) {
                    dentro = true
                    pS.splice(i, 1, letra);
                    palavraExibida.innerHTML = `${pS.join('')}`;
                }
            };
            if(!dentro){
                vida--
                tiraVida(vida)
                console.log(vida)
            }
        }

        // retornar letra clicada no teclado
        var botoes = document.body.querySelectorAll(".btn");

        for (let x = 0; x < botoes.length; x++) {
            botoes[x].addEventListener("click", function () {
                verificaLetra(botoes[x].textContent)
                let id = `tecla-${botoes[x].textContent}`
                console.log(id)
                letraUsada(id)
                console.log(`Clicou em ${botoes[x].textContent}`);
                
            });
        }

    })





