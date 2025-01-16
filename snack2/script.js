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
    const { nome, fallisubiti, puntifatti } = squadreCalcio[i];
    // creo un nuovo array con i valori di nome e falli subiti
    nuovoArray.push({ nome, fallisubiti, puntifatti  });
    
}

// stampo il risultato
console.log(nuovoArray);