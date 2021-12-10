//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

//PRIMO ESERCIZIO
const zucchine = [
    {
        varieta: 'var1',
        peso: 100,
        lunghezza: 10,
    },

    {
        varieta: 'var2',
        peso: 120,
        lunghezza: 60,
    },

    {
        varieta: 'var3',
        peso: 150,
        lunghezza: 10,
    },

    {
        varieta: 'var4',
        peso: 80,
        lunghezza: 70,
    },

    {
        varieta: 'var5',
        peso: 130,
        lunghezza: 14,
    },

    {
        varieta: 'var6',
        peso: 100,
        lunghezza: 40,
    },

    {
        varieta: 'var7',
        peso: 100,
        lunghezza: 60,
    },

    {
        varieta: 'var8',
        peso: 100,
        lunghezza: 10,
    },

    {
        varieta: 'var9',
        peso: 100,
        lunghezza: 150,
    },

    {
        varieta: 'var10',
        peso: 100,
        lunghezza: 40,
    },
  ];

let somma=0;

for (let i=0; i<zucchine.length; i++) {
    peso = zucchine[i].peso;
    somma = somma + peso;
}
//FINE PRIMO ESERCIZIO


//SECONDO ESERCIZIO
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchinePiccole = [];
const zucchineGrandi = [];

for (let i=0; i<zucchine.length; i++) {
    let elemento = zucchine[i];
    if (elemento.lunghezza < 15) {
        zucchinePiccole.push(elemento);
    } else {
        zucchineGrandi.push(elemento);
    }
}

let pesoZucchinePiccole = 0;
let pesoZucchineGrandi = 0;

for (let i=0; i<zucchinePiccole.length; i++) {
    let elemento = zucchinePiccole[i];
    pesoZucchinePiccole = pesoZucchinePiccole + elemento.peso;
}

for (let i=0; i<zucchineGrandi.length; i++) {
    let elemento = zucchineGrandi[i];
    pesoZucchineGrandi = pesoZucchineGrandi + elemento.peso;
}

console.log (pesoZucchinePiccole);
console.log (pesoZucchineGrandi);
//FINE SECONDO ESERCIZIO


//INIZIO TERZO ESERCIZIO
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function unione(array1, array2) {
    const array3 = [];
    for (let i=0; i<array1.length; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3;
}

const arrayLettere = ["a","b","c"];
const arrayNumeri = [1,2,3];
const arrayUnito = unione(arrayLettere, arrayNumeri);
console.log(arrayUnito);
//FINE TERZO ESERCIZIO

