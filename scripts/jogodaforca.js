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

