/* pregunta 4*/

function fizzBuzz() {

    let x = parseInt(prompt("Ingrese un número:"));

    if (isNaN(x)) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    for (let i = 1; i <= x; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }

        else if (i % 3 === 0) {
            console.log("Fizz");
        }

        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        else {
            console.log(i);
        }
    }
}
fizzBuzz();


/* pregunta 5*/


let n = parseInt(prompt("Ingresa la cantidad de números de Fibonacci que deseas ver:"));

function generarFibonacci(cantidad) {
    if (cantidad <= 0) return [];
    if (cantidad === 1) return [0];

    let fibo = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}

let resultado = generarFibonacci(n);
console.log(resultado);
alert("Los primeros " + n + " números son: " + resultado.join(", "));


/* pregunta 6*/

function primo(numeroprimo) {
    if (numeroprimo <= 1) {
        return false;
    }

    for (let i = 2; i < numeroprimo; i++) {
        if (numeroprimo % i === 0) {
            return false; 
        }
    }
    return true; 
}

let numeroprimo = parseInt(prompt("Ingrese un número para determinar si es primo o no"));

if (primo(numeroprimo)) {
    console.log(`El número ${numeroprimo} es primo`);
} else {
    console.log(`El número ${numeroprimo} no es primo`);
}


/* pregunta 7*/

function tablaMultiplicar() {

    let m = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    if (isNaN(m)) {

        console.log("Por favor, ingrese un número válido.");

        return;
    }

    console.log(`Tabla de multiplicar del ${m}:`);

    for (let i = 1; i <= 10; i++) {
        let resultado = m * i;

        console.log(`${m} x ${i} = ${resultado}`);
    }
}
tablaMultiplicar();

/* pregunta 8*/

function contarVocales(texto) {

    let textoLower = texto.toLowerCase();
    let contador = 0;
    let vocalesEncontradas = [];

    for (let i = 0; i < textoLower.length; i++) { 
        let caracter = textoLower[i];

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            contador++;
            vocalesEncontradas.push(caracter);
        }
    }
    
    return { cantidad: contador, vocales: vocalesEncontradas };
}
let textoUsuario = prompt("Ingrese un texto para contar sus vocales:");

let resultados = contarVocales(textoUsuario);
console.log(`El texto "${textoUsuario}" tiene ${resultados.cantidad} vocales.`);
console.log(`Vocales encontradas: ${resultados.vocales.join(', ')}`);


/*pregunta 9*/

function encontrarMayor(arreglo) {
    if (arreglo.length === 0) {
        console.log("El arreglo está vacío.");
        return null;
    }

    let b = arreglo[0];
    
    for (let i = 1; i < arreglo.length; i++) {

        if (arreglo[i] > b) {
            b = arreglo[i]; 
        }
    }
    
    return b;
}

let numeros = [17, 38, 23, 45, 7, 9, 33, 5];

let mayor = encontrarMayor(numeros);
console.log(`Arreglo: [${numeros.join(', ')}]`);
console.log(`El número mayor es: ${mayor}`);

/*pregunta 10*/

function sumar(a,b){
    return a + b; 
}
function resta(a,b){
    return a - b;
}
function multiplicar (a,b){
    return a * b;
}
function dividir (a,b){
    return a / b;
}

let a = parseFloat(prompt("ingresa un numero: "));
let b = parseFloat(prompt("ingresa otro numero: "));

console.log(`Suma: ${a} + ${b} = ${sumar(a, b)}`);
console.log(`resta: ${a} - ${b} = ${resta(a,b)}`);
console.log(`multiplicar: ${a} * ${b} = ${multiplicar(a,b)}`);
console.log(`dividir: ${a} / ${b} = ${dividir(a,b)}`);
