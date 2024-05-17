//Practica 1

//1
function rectangulo(altura, ancho) {
    var area = altura * ancho;
    return area;
}
var altura = 5;
var ancho = 10;
var areaRectangulo = rectangulo(altura, ancho);
console.log("El área del rectángulo es: " + areaRectangulo);

//2
function triangulo(base, altura) {
    var area = (altura * base) / 2;
    return area;
}
var altura = 5;
var base = 10;
var areaTriangulo = triangulo(base, altura);
console.log("El área del triangulo es: " + areaTriangulo);

//3
function largoDelArray(array) {
    return array.length;
}
var array = [1, 2, 3, 4, 5];
console.log("La longitud del array es: " + array.length);

//4
function cantidadDeLetras(palabra) {
    return palabra.lenght;
}
var palabra = 'Holaaaa'
console.log("La longitud de la palabras es: " + palabra.length)

//5
function dolarHoy(dolar) {
    var dolar = pesos / 800
}
var pesos = 8000
var dolar = pesos / 800
console.log("El precio en dolares es: " + dolar)

//6
function precioFinal(precio) {
    var precioFinal = precio + (precio * 0.21)
}
var precio = 100
precioFinal = precio + (precio * 0.21)
console.log("El precio final es: " + precioFinal)

//7
function mitad(numeroMitad) {
    var numeroMitad = numero / 2
}
var numero = 100
var numeroMitad = numero / 2
console.log("La mitad del numero es: " + numeroMitad)

//8
function siguiente(numero) {
    return numero + 1;
  }
var numero = 1
var siguienteNumero = numero + 1
console.log("El siguiente numero es: " + siguienteNumero)

//9
function doble(numero) {
  return 2 * numero;
}
var numero = 2
var dobleNumero = numero * 2
console.log("El doble del numero es: " + dobleNumero)

//10
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
var numero = 3
var dobleNumero = numero * 2
var siguienteDelDoble = dobleNumero * 2
console.log("El siguiente del doble es: " + siguienteDelDoble)

//11
function anterior(numero) {
    return numero - 1;
  }
var numero = 7
var anteriorNumero = numero - 1
console.log("El numero anterior es: " + anteriorNumero)

//12
function triple(numero) {
    return 3 * numero;
  }
var numero = 2
var tripleNumero = numero * 3
console.log("El triple del numero es: " + tripleNumero)

//13
function anteriorDelTriple(numero) {
    return 3 * numero - 1;
  }
var numero = 2
var anteriorDelTripleNumero = numero * 3 - 1
console.log("El anterior del triple del numero es: " + anteriorDelTripleNumero)

//Practica 2 de aca en adelante

//1
var misDatos = {
    nombre: "Lucas",
    apellido: "Habib",
    dni: "46212691",
    edad: "19",
    comidasFavoritas: ["Milanesa", "Asado", "Fideos"],
    saludar: function() {
        return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi comida favorita es " + this.comidasFavoritas[0];
    }
};
console.log(misDatos.saludar())

//2
var auto = {
    marca: "Subaru",
    modelo: "Forrester",
    anio: 2020,
    color: "Azul Marino",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
        }
    }
};
auto.avanzar(10); 
auto.retroceder(5);

console.log("La posición final del auto es: " + auto.posicion);

var nuevoAuto = {
    marca: "Subaru",
    modelo: "Forrester",
    anio: 2020,
    color: "Azul Marino",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
    }
};

nuevoAuto.moverse(10);
console.log("La posición final del auto es: " + nuevoAuto.posicion);

//3
var ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(numeroPoder) {
        this.energia -= 10; 
        var poderElegido = this.poderes[numeroPoder];
        return "Poder Elegido de " + this.nombre + ": " + poderElegido + ". Energía restante: " + this.energia;
    }
};

var Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(numeroPoder) {
        this.energia -= 10; 
        var poderElegido = this.poderes[numeroPoder];
        return "Poder Elegido de " + this.nombre + ": " + poderElegido + ". Energía restante: " + this.energia;
    }
};
var indicesPoderes = [0, 1, 2];

for (var i = 0; i < indicesPoderes.length; i++) 
    console.log(ironMan.getPoder(indicesPoderes[i]));
    console.log(Hulk.getPoder(indicesPoderes[i]));