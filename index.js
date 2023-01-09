

function encriptarMensaje(cadena) {
    var resultado = "";
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i];
        if (caracter === "a") {
            resultado += "ai";
        } else if (caracter === "e") {
            resultado += "enter";
        } else if (caracter === "i") {
            resultado += "imes";
        } else if (caracter === "o") {
            resultado += "ober";
        } else if (caracter === "u") {
            resultado += "ufat";
        } else {
            resultado += caracter;
        }
    }
    return resultado;
}

function toastAlert(message, color) {

    const toastAlert = document.getElementById("toastAlert");
    toastAlert.style.display = 'block'
    toastAlert.classList.add("activeAnimation");
    const insert = `<p class="toastAlert" style="background-color: ${color};">${message}</p>`;
    toastAlert.innerHTML = insert;
    setTimeout(() => {
        toastAlert.style.display = 'none'
        toastAlert.classList.remove("activeAnimation");
    }, 3000);
}

function ocultarMensaje() {
    document.getElementById('message__container').style.display = 'none'
}

function validarInput(cadena) {
    if (cadena.match(/[0-9]/g)) {
        return "Ingrese solo letras";
    } else if (cadena.match(/[A-Z]/g)) {
        return "Ingrese solo letras minúsculas";
    } else if (!cadena.match(/^[a-z\s]+$/g)) {
        return "Ingrese solo letras sin acentos y sin caracteres especiales";
    }
    return 'validate';
}

const btnEncriptar = document.getElementById('button__encrypt')

btnEncriptar.addEventListener("click", function () {

    const textoIngresado = document.getElementById('input__text').value.trim();;

    if (textoIngresado.length === 0) {
        return toastAlert("Ingrese mensaje a encriptar", "#ea580c");
    }

    if (validarInput(textoIngresado) === 'validate') {

        document.getElementById('message__crypt').style.display = 'flex'
        ocultarMensaje()
        document.getElementById('input__text--encrypt').value = encriptarMensaje(textoIngresado)

        document.getElementById('input__text').value = "";

    } else {
        toastAlert(validarInput(textoIngresado), "#ea580c")
        document.getElementById('input__text').value = "";
    }

});

function desencriptarMensaje(cadena) {
    return cadena
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

const btnDesencriptar = document.getElementById('button__decrypt')
btnDesencriptar.addEventListener('click', function () {

    const textoIngresado = document.getElementById('input__text').value.trim();

    if (textoIngresado.length === 0) {
        return toastAlert("Ingrese mensaje a desencriptar", "#ea580c");
    }

    ocultarMensaje()

    document.getElementById('input__text--encrypt').value = desencriptarMensaje(textoIngresado)

    document.getElementById('input__text').value = "";

})

const btnCopiar = document.getElementById('button__copy')
btnCopiar.addEventListener('click', function () {

    const textCopy = document.getElementById('input__text--encrypt').value.trim();
    if (textCopy.length === 0) {
        return toastAlert("No existe ningún mensaje a copiar", "#64748b");
    }

    navigator.clipboard.writeText(textCopy);

})
