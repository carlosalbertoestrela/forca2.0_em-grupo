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

// let categoriaPalavra = "teste";
// let palavraSorteada = "leite em po";

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
// separaCaracteres();
// console.log(caracteresPalavraSorteada);


// Murillo - função que exibe a categoria e os "_" na tela.

// function mostraNaTela(tema, caracteres) {
//     const mostraCategoria = document.getElementById("categoria__sorteada");
//     mostraCategoria.innerHTML = `${tema}`;
//     const palavraExibida = document.getElementById('palavra__escondida');
//     palavraExibida.innerHTML = `${caracteres}`;

// }

// fim mostraNaTela



// let letras_erradas = [];
// if (caracteres.indexOf(letra) < 0) {
//     alert('Letra errada!!')
//     letras_erradas.push(letra)
// };

// console.log(letras_erradas);
// console.log(parseInt(indices));
// console.log(caracteres);
// alert(caracteres);

fetch("scripts/teste.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {

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
        palavraExibida.innerHTML = `${palavraSecreta}`;

        function verificaLetra(letra = '', p = palavra, pS = palavraSecreta) {

            for (i in palavra) {
                if (p[i] == letra) {
                    pS.splice(i, 1, letra);
                    palavraExibida.innerHTML = `${pS}`;
                };
            };
        }

        // retornar letra clicada no teclado
        var botoes = document.body.querySelectorAll(".btn");

        for (let x = 0; x < botoes.length; x++) {
            botoes[x].addEventListener("click", function () {
                verificaLetra(botoes[x].textContent)
                console.log(`Clicou em ${botoes[x].textContent}`);
            });
        }

    })