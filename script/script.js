// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// Snack 1
// const biciclette = [
//     {
//         'nome': 'Bianchi',
//         'peso': 10
//     },
//     {
//         'nome': 'Atala',
//         'peso': 8
//     },
//     {
//         'nome': 'Graziella',
//         'peso': 12
//     }

// ];
// console.table(biciclette);


// // creo ciclo for

// // creo variabile e la inizializzo con il primo elemento dell'array biciclette
// let biciLeggera = biciclette[0];
// // creo un ciclo for per scorrere l'array biciclette 
// for (let i = 0; i < biciclette.length; i++) {
//     // se il peso della bici corrente è minore del peso della bici più leggera
//     if (biciclette[i].peso < biciLeggera.peso) {
//         // assegno alla variabile biciLeggera la bici corrente
//         biciLeggera = biciclette[i];
//     }

// }
// // stampo la bici più leggera
// console.log(`La bici più leggera è ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`);






// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadreCalcio = [
    {
        'nome': 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Inter',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Juventus',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Atalanta',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Roma',
        'punti fatti': 0,
        'falli subiti': 0
    }   

];
// console.log(squadreCalcio);

// creo ciclo for per generare numeri random per i punti fatti e i falli subiti
for (let i = 0; i < squadreCalcio.length; i++) {
    // genero numeri random per i punti fatti e i falli subiti
    squadreCalcio[i].puntifatti = Math.floor(Math.random() * 100);
    squadreCalcio[i].fallisubiti = Math.floor(Math.random() * 100);
}
//stampo il risultato
// console.log(squadreCalcio);

// creo un nuovo array con i nomi e i falli subiti
const nuovoArray = [];

// creo un ciclo for per scorrere l'array squadreCalcio
for (let i = 0; i < squadreCalcio.length; i++) {
    // creo una variabile per estrapolare i valori di nome e falli subiti
    
    // creo un nuovo array con i valori di nome e falli subiti
    
    
}

// stampo il risultato


