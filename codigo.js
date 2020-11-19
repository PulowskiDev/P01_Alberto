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

    let dni = document.getElementById('dni').value;
    let letraDni = document.getElementById('letraDni').value.toUpperCase();

    if (dni < 0 || dni > 99999999) {
        alert('Numero no reconocido');
        document.getElementById('dni').value = '';
        document.getElementById('letraDni').value = '';
    } else {
        let letra = letras[dni % 23];
        if (letraDni === letra) {
            alert(`\u00A1Coinciden!\n${dni}-${letra}`);
        } else {
            document.getElementById('letraDni').value = '';
            alert('La letra que ha introducido no coincide');
        }
    }
});

//Ejercicio 7
let numero = 10;
let n = 1;
for (i = 1; i <= numero; i++) {
    n *= i;
}
console.log(n);

//Ejercicio 8
const numEntero = window.prompt('Introduzca un entero');
const ejeOcho = (entero) => {
    if (entero % 2 === 0) {
        console.log('El numero es par');
    } else {
        console.log('El numero es impar');
    }
}
ejeOcho(numEntero);

//Ejercicio 9
let min = /[a-z]+/g;
let may = /[A-Z]+/g;
let mezcla = /[A-Z][a-z]+/g;
const mayusMinus = (texto) => {
    if (texto.search(may) && !texto.search(min)) {
        console.log('El texto solo contiene minusculas');
    } else if (texto.search(min) & !texto.search(may)) {
        console.log('Texto solo contiene mayusculas');
    } else {
        console.log('Texto contiene mayusculas y minusculas');
    }
}
mayusMinus(numEntero);

//Ejercicio 10
const palindromo = (texto) => {
    let textoSin = texto.trim().toLowerCase();
    let textoArray = textoSin.split('');
    let textoReverse = textoArray.reverse();
    let ok = true;

    textoArray.forEach((letra,indice) => {
        if(letra == textoReverse[indice]){
            ok = true;
        }else{
            ok = false;
        }
    });
    return ok;
}

let frase = 'La ruta nos aporto otro paso natural';
console.log(`El texto es palindromo? ${palindromo(frase)}`);

//Ejercicio 11
class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    //Methods
    obtDetalles(){};
}

class Estudiante extends Persona{
    constructor(curso, grupo, nombre, edad, genero){
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    //Methods
    registrar(){};
}

class Profesor extends Persona{
    constructor(asignatura, nivel, nombre, edad, genero){
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    //Methods
    asignar(){};
}

var alumno1 = new Estudiante('Primero', 'A', 'Eduardo', 21, 'M');
var profesor1 = new Profesor('Matematicas', 'Avanzado', 'Maria', 38, 'F');
console.log(`El alumno ${alumno1.nombre} tiene como profesora a ${profesor1.nombre} `
            + `y tienen una diferencia de edad de ${profesor1.edad - alumno1.edad} `
            + `a\u00F1os`);

//Ejercicio 12            

