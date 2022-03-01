let chooseWord = (array = []) => {
    //receives one array and return one random item of the array
    choosed = Math.floor(Math.random() * (array.length - 0) + 0);
    return array[choosed];}

   
fetch("scripts/teste.json")
.then((response) => {
    return response.json();
})
.then((data) => {

    let listaPalavras = data 
    console.log(listaPalavras)

    sorteiaCaterogia();

    function sorteiaCaterogia() {
        let categoria = Object.keys(listaPalavras);
        const categoriaSorteada = Math.floor(Math.random() * categoria.length);
    }
       

    const indicePalavra = Math.floor(Math.random() * listaPalavras['plantas'].length);
    console.log(indicePalavra)
    
    
    console.log(listaPalavras['plantas'])
    console.log(categoria[categoriaSorteada]);
    
    console.log(chooseWord("essa é a categoria ",categoria))
    
})

