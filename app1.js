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
            // Convertir el valor del input a minúsculas
            let valor = elemento.value.toLowerCase();

            // Crear una variable para almacenar el valor limpio
            let valorLimpio = '';

            // Verificar cada carácter en el valor
            for (let i = 0; i < valor.length; i++) {
                if (["á", "é", "í", "ó", "ú", "ä", "ë", "ï", "ö", "ü", "ç", "$", "/", "!", "@", "#", "&", "(", ")", "-", "_"].includes(valor[i])) {
                    alert(`Este carácter '${valor[i]}' no es válido`);
                    // Solo actualiza el valor limpio si el carácter es válido
                } else {
                    valorLimpio += valor[i];
                }
            }

            // Actualizar el valor del input con el valor limpio
            elemento.value = valorLimpio;
        });

        elemento.addEventListener('dblclick', function() {
            elemento.value = '';
            // Asegúrate de que 'resultado' esté definido en tu código
            let resultado = document.getElementById('resultado'); // Añadido para definir 'resultado'
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
            codigo += dict[texto.value[i]];
          } else {
               console.log(texto.value[i]);
               codigo += texto.value[i];
            };
    }
    resultado.value = codigo; 

}

function decodificar() {
    let codigo = texto.value;
    resultado.value = '';
    let result = codigo;

    console.log(codigo);

    Object.entries(dict).forEach(([key, value]) => {
        console.log(key, ' - ', value, ' - ', codigo.indexOf(value));
        if (codigo.includes(value)) {
            result = result.split(value).join(key);
        }
    });

    console.log(result);
    resultado.value = result;
}
