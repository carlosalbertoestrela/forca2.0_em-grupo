const sort_Categoria_Palavra = (objeto={}) =>{
    //Carlos Alberto - retorna um array com tema na posição 0 e palavra na posição 1;
    const aleatorio = (array=[]) =>{
        max = array.length;
        return Math.floor(Math.random() * (max - 0) + 0);
    }
    const categorias = Object.keys(objeto);
    const categoria = categorias[aleatorio(categorias)];
    const elementos = objeto[categoria];
    const elemento = elementos[aleatorio(elementos)];

    return [categoria.toUpperCase(), elemento.toUpperCase()]
}

   


fetch("scripts/teste.json")    
.then((response) => {
    return response.json();
})    
.then((data) => {

    let listaPalavras = data 
    
    categoriaPalavra = sort_Categoria_Palavra(listaPalavras)
    console.log(categoriaPalavra)

    
})
// Rafael - função de tratamento da palavra sorteada
// let categoriaPalavra = "teste";
// let palavraSorteada = "leite em po";
// let caracteresPalavraSorteada = "";

    function separaCaracteres(){
        
        for(i in palavraSorteada){
            if(palavraSorteada[i] != " ") {
                caracteresPalavraSorteada = caracteresPalavraSorteada + "_";
            } else {
                caracteresPalavraSorteada = caracteresPalavraSorteada + " ";
            }
                
        }
        return caracteresPalavraSorteada;
    }
    separaCaracteres();
    console.log(caracteresPalavraSorteada);


// Murillo - função que exibe a categoria e os "_" na tela.

    function mostraNaTela(tema, caracteres) {
        const mostraCategoria = document.getElementById("categoria__sorteada");
    mostraCategoria.innerHTML = `${tema}`; 
        const palavraExibida = document.getElementById('palavra__escondida');
    palavraExibida.innerHTML = `${caracteres}`;

    }

    mostraNaTela(categoriaPalavra, caracteresPalavraSorteada);

// fim mostraNaTela
