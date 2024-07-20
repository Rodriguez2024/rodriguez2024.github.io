//crear un diccionario 

let dict = {
    'e': 'enter',
    'i':  'imes',
    'a':  'ai',
    'o':  'ober',
    'u':  'ufat'
}

let codigo = '';
let cadena = '';

const texto = document.getElementById('valorUsuario');
let resultado = document.getElementById('resultadoUsuario');

const box = document.querySelector(".box");
document.addEventListener('DOMContentLoaded', function() {
    let elemento = document.getElementById('valorUsuario');

    if (elemento) {
        // Agregar un event listener para el evento 'input'
        elemento.addEventListener('input', function(event) {
            let valor = elemento.value.toLowerCase();
            if (["á", "é", "í", "ó", "ú", "ä", "ë", "ï", "ö", "ü", "ç", "$", "/", "!", "@", "#", "&", "(", ")", "-", "_"].includes(valor)) {
                //console.log(dict[texto.value[i]]);
                alert(`Este caracter ${valor} no es válido`);
                valor = '';
            }
            elemento.value = valor; // Actualizar el valor del input a minúsculas
        });

        elemento.addEventListener('dblclick', function() {
            elemento.value = '';
            // Asegúrate de que 'resultado' esté definido en tu código
            if (resultado) {
                resultado.value = '';
            }
        });
    }
});

function codificar() {
    codigo = '';
    resultado.value = '';
    for (let i = 0, n = texto.value.length; i < n; i++) { 
        let letra = texto.value[i];
        if(["a", "e", "i", "o", "u"].includes(letra)) {
            //console.log(dict[texto.value[i]]);
            codigo += dict[texto.value[i]];
          } else {
               console.log(texto.value[i]);
               codigo += texto.value[i];
            };
    }
    console.log(codigo, " = ", texto.value);
    resultado.value = codigo; 

}

