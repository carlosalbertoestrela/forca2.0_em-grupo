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

/*KEYBOARD BEGIN*/
const keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: true,
    },

    init() {
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("kb__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".kb__key");

        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M", "replay"
        ];

        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["P", "L", "replay"].indexOf(key) !== -1;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("kb__key");

            switch(key) {
                case "replay":
                    keyElement.classList.add(".kb__key--wide");
                    keyElement.innerHTML = createIconHTML("replay");
                    
                    //funcão para recomeçar o jogo


                    break;

                default:
                    keyElement.textContent = key.toUpperCase();

                    keyElement.addEventListener("click", () => {
                    this._triggerEvent("oninput");
                    });
                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"))
            }
        });

        return fragment;

    },

    _triggerEvent(handlerName) {
        console.log("event triggered! Event name: " + handlerName)
    },
    
    open(initialValue, oninput, onclose) {

    },

    close() {

    },

};

window.addEventListener("DOMContentLoaded", function(){
    keyboard.init();
});



/*KEYBOARD END*/