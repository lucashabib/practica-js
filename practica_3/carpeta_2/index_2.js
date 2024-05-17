//Practica 3


//1
for (var i = 0; i < 5; i += 1) {
    console.log("Practicando con el bucle for");
}

for (var i = 0; i < 10; i += 1) {
    console.log("La variable i tiene el valor " + i);
}

for (var i = 2; i < 22; i += 2) {
    console.log("Multiplo de 2: " + i);
}

for (var i = 5; i < 550; i += 5) {
    console.log("Multiplo de 5: " + i);
}

for (var i = 100; i > -1; i -= 1) {
    console.log(i);
}

//2

var base = 2; 
var resultados = [];

for (var i = 1; i <= 10; i++) {
    resultados.push(base * i);
}

console.log(resultados);

//3

var ganancias = [100, 120, 80, 110, 40, -70, -100, 250, -70, 220]
var suma = 0;

for (var i = 0; i < ganancias.length; i += 1) {
    suma += ganancias[i];
}

console.log("La suma es: ", suma);

//4

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i += 1) {
    console.log(healingIsDifficult[i]);
}

let healingIsDifficult2 = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

console.log("Lista de temas:");

for (let i = 0; i < healingIsDifficult2.length; i += 1) {
    console.log((i + 1) + healingIsDifficult2[i]);
}

//5

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    if (persona.ciudad) {
        console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`);
    }
}