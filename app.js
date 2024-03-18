let textoUsuario = "";
let palabradesencriptada = "";
let palabraEncriptada = "";
let textoEncriptado = "";
let textoDesencriptado = "";

function encriptarPalabra(textoUsuario) {
    let palabraEncriptada = "";
    if (/[áéíóúÁÉÍÓÚ]/.test(textoUsuario) || /[A-Z]/.test(textoUsuario)) {
        alert("Por favor, evite usar mayúsculas o tildes en el texto encriptado.");
        return "";
    }
    for (let i = 0; i < textoUsuario.length; i++) {
        let letra = textoUsuario.charAt(i);
        if ("aeiou".includes(letra)) {
            if (letra.toLowerCase() === 'a') {
                palabraEncriptada += 'ai';
            } else if (letra.toLowerCase() === 'e') {
                palabraEncriptada += 'enter';
            } else if (letra.toLowerCase() === 'i') {
                palabraEncriptada += 'imes';
            } else if (letra.toLowerCase() === 'o') {
                palabraEncriptada += 'ober';
            } else if (letra.toLowerCase() === 'u') {
                palabraEncriptada += 'ulfat';
            }
        } else {
            palabraEncriptada += letra;
        }

    }
    return palabraEncriptada;
}

function desencriptarPalabra(textoEncriptado) {
    return textoEncriptado.replace(/ai|enter|imes|ober|ulfat/g, function (desencriptada) {
        switch (desencriptada) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ulfat':
                return 'u';
            default:
                return desencriptada;
        }
    });
}

function copiar() {
    var texto = document.getElementById('mensajeTransformado').value;
    navigator.clipboard.writeText(texto).then(function () {
    }, function (err) {
        console.error('Error al intentar copiar el texto: ', err);
    });
}

function mostrarBoton() {
    var button = document.getElementById('copiar');
    if (button.style.display === 'none') {
        button.style.display = 'block';
    }
}

function actualizarInterfaz() {
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("mensajeTransformado").style.display = "block";
    mostrarBoton();
}

function encriptarTexto() {
    textoUsuario = document.getElementById('mensaje').value;
    console.log("El valor de la variable es", textoUsuario);
    document.getElementById("sinMensaje").style.display = "none"; 
    document.getElementById("mensajeTransformado").value = textoUsuario;  
    palabraEncriptada = encriptarPalabra(textoUsuario);
    document.getElementById("mensajeTransformado").value = palabraEncriptada;
    document.getElementById("mensajeTransformado").style.display = "block"; 
    actualizarInterfaz();
}

function desencriptarTexto() {
    textoEncriptado = document.getElementById('mensaje').value;
    console.log("El valor de la variable es", textoEncriptado);
    textoDesencriptado = desencriptarPalabra(textoEncriptado);
    document.getElementById("mensajeTransformado").value = textoDesencriptado;
    actualizarInterfaz();
}

