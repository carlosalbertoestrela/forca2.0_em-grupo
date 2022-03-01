fetch("teste.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data[0])
    
})

// const palavraSorteada = Math.floor(Math.random() * .length);