let KmPercorsi = prompt("quanti chilometri percorrerai?");

console.log(KmPercorsi);
console.log(typeof KmPercorsi);

//chiedere l'eta' del passeggero


let ClientAge = parseFloat(prompt("quanti anni hai?"));

console.log(ClientAge);
console.log(typeof ClientAge);

//calcolo del prezzo in base ai km

const CostoAlKm = 0.21;
const EuroPerTratta = parseFloat(KmPercorsi * CostoAlKm);



//creazione di un if con le fasce d'eta'
let ScontoMinorenni = ((EuroPerTratta * 20) / 100);

let ScontoAnziani = ((EuroPerTratta * 40) / 100);

let BigliettoGiovani = EuroPerTratta - ScontoMinorenni

let BigliettoAnziani = EuroPerTratta - ScontoAnziani

if (ClientAge < 18) {
    console.log("Il tuo biglietto avrà un costo di " + BigliettoGiovani.toFixed(2) + "Є");
}
else if (ClientAge > 65) {
    console.log("Il tuo biglietto avrà un costo di " + BigliettoAnziani.toFixed(2) + "Є");
}
else {
    console.log("Il tuo biglietto avrà un costo di " + EuroPerTratta.toFixed(2) + "Є");
}