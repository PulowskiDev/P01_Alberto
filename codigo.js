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
        if(typeof valor === 'string'){
            valoresTexto.push(valor);
        };
        valoresTexto.forEach((texto) => {
            if(texto.length > long){
                palabra = texto;
            }
        });
    });
    return palabra;
}
console.log(`La palabra mas larga del array es '${textLong()}' mide ${textLong().length} caracteres`);

function valuesBoolean(){
    valores.forEach((valor) => {
        if(typeof valor === 'boolean'){
            console.log(valor);
        }
    });
}
valuesBoolean();

function suma(array){
    let numeros = [];
    let suma = 0;

    array.forEach((valor) => {
        if(typeof valor === 'number'){
            numeros.push(valor);
        }
    });
    numeros.forEach((num) => {
        suma += num;
    });

    console.log(suma);
};

function suma(array){
    let numeros = [];
    let suma = 0;

    array.forEach((valor) => {
        if(typeof valor === 'number'){
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
 
if( numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
  console.log("numero2 es positivo");
}
if((numero1 - numero2) < 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if((numero1++) < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Ejercicio 6