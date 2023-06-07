const ingreseTexto = document.getElementById("ingreseTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const Munheco = document.getElementById("Munheco");

const rightInfo = document.getElementById("rightInfo");

const right = document.getElementById("right");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufast"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    Munheco.classList.add("oculto");
    ingreseTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase()
    if(texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText
        };
    } else{
        alert("Ingrese Texto a Encriptar")
    }

    
    //const textoEncriptado = encriptar(texto)
    
    remplace(encriptar(texto))
    
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        };
    } else{
        alert("Ingrese Texto a Desencriptar")
    }
    
    remplace(desencriptar(texto))
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");

    mensajeFinal.innerHTML = "";

    Munheco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();

})