//Variables
const mensaje = 'Javascript\n'
    + 'Hola Mundo!\nQu\u00E9 facil es incluir '
    + '\'comillas simples\' y \"comillas dobles\"';
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const valores = [true, 5, false, 'hola', 'adios', 2];

//Ejericicios 1 y 2 Impresion por consola de los mensajes
alert(mensaje);
console.log('Hola Mundo!');
console.log('Soy el primer script');

//Ejercicio 3 meses
meses.forEach((mes, indice) => {
    console.log(`${indice + 1}: ${mes}`);
});

//Ejercicio 4 valores
function textLong() {

    let valoresTexto = [];
    let long = 0;
    let palabra;

    valores.forEach((valor) => {
        if (typeof valor === 'string') {
            valoresTexto.push(valor);
        };
        valoresTexto.forEach((texto) => {
            if (texto.length > long) {
                palabra = texto;
            }
        });
    });
    return palabra;
}
console.log(`La palabra mas larga del array es '${textLong()}' mide ${textLong().length} caracteres`);

function valuesBoolean() {
    valores.forEach((valor) => {
        if (typeof valor === 'boolean') {
            console.log(valor);
        }
    });
}
valuesBoolean();

function suma(array) {
    let numeros = [];
    let suma = 0;

    array.forEach((valor) => {
        if (typeof valor === 'number') {
            numeros.push(valor);
        }
    });
    numeros.forEach((num) => {
        suma += num;
    });

    console.log(suma);
};

function suma(array) {
    let numeros = [];
    let suma = 0;

    array.forEach((valor) => {
        if (typeof valor === 'number') {
            numeros.push(valor);
        }
    });
    numeros.forEach((num) => {
        suma += num;
    });

    console.log(suma);
};

//Ejercicio 5
var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
    console.log("numero2 es positivo");
}
if ((numero1 - numero2) < 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if ((numero1++) < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Ejercicio 6
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',
    'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
    'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

document.getElementById('formu').addEventListener('submit', (e) => {
    e.preventDefault();

    let letra;
    const dni = document.getElementById('dni').value;
    const letraDni = document.getElementById('letraDni').value.toUpperCase();
    if (dni < 0 || dni > 99999999) {
        alert('Debe introducir un numero comprendido entre 0 y 99999999');
    } else {
        switch (dni % 23) {
            case 0:
                letra = letras[0];
                break;
            case 1:
                letra = letras[1];
                break;
            case 2:
                letra = letras[2];
                break;
            case 3:
                letra = letras[3];
                break;
            case 4:
                letra = letras[4];
                break;
            case 5:
                letra = letras[5];
                break;
            case 6:
                letra = letras[6];
                break;
            case 7:
                letra = letras[7];
                break;
            case 8:
                letra = letras[8];
                break;
            case 9:
                letra = letras[9];
                break;
            case 10:
                letra = letras[10];
                break;
            case 11:
                letra = letras[11];
                break;
            case 12:
                letra = letras[12];
                break;
            case 13:
                letra = letras[13];
                break;
            case 14:
                letra = letras[14];
                break;
            case 15:
                letra = letras[15];
                break;
            case 16:
                letra = letras[16];
                break;
            case 17:
                letra = letras[17];
                break;
            case 18:
                letra = letras[18];
                break;
            case 19:
                letra = letras[19];
                break;
            case 20:
                letra = letras[20];
                break;
            case 21:
                letra = letras[21];
                break;
            case 22:
                letra = letras[22];
                break;
            case 23:
                letra = letras[23];
                break;
            case 24:
                letra = letras[24];
                break;
        }
        if(letra == letraDni){
            alert(`\u00A1Coinciden!\n${dni}-${letra}`);
        }else{
            alert(`La letra no coincide con la de su DNI`);
        }   
    }
});

