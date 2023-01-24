console.log(`inizio js`);

const nameInput = document.querySelector("#input-nome");
const prova = document.querySelector("#titolo-nome");
const kmInput = document.querySelector("#journey-km");
const selectAge = document.querySelector("#age-range");
const maggiorenne = document.querySelector("#maggiorenne");
const minorenne = document.querySelector("#minorenne");
const vetusto = document.querySelector("#vetusto");
const outputAge = document.querySelector("#valore-ticket");
const button = document.getElementById("bottone");




let costoDelBiglietto;
const costoAlKm = 0.21;
console.log(costoAlKm);

let ScontoMinorenni = ((costoDelBiglietto * 20) / 100);

let ScontoAnziani = ((costoDelBiglietto * 40) / 100);


let costoBigliettoScontatoGiovani;
let costoBigliettoScontatoAnziani;

button.addEventListener(
    "click",
    function () {
        console.log(nameInput.value);
        console.log(kmInput.value);
        costoDelBiglietto = kmInput.value * costoAlKm;
        console.log(kmInput.value * costoAlKm);
        prova.innerHTML = costoDelBiglietto;


        if (selectAge == minorenne) {
            costoBigliettoScontatoGiovani = costoDelBiglietto - ScontoMinorenni;
            console.log(costoBigliettoScontatoGiovani + "Є");
            outputAge.innerHTML = costoBigliettoScontatoGiovani;
        }

        else if (selectAge == vetusto) {
            costoBigliettoScontatoAnziani = costoDelBiglietto - ScontoAnziani;
            outputAge.innerHTML = costoBigliettoScontatoAnziani;
            console.log(costoBigliettoScontatoAnziani + "Є");
        }
        else {
            outputAge.innerHTML = costoDelBiglietto;
            console.log(costoDelBiglietto + "Є");
        }







    });





