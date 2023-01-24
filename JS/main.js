console.log(`inizio js`);

const nameInput = document.querySelector("#input-nome");
const prova = document.querySelector("#titolo-nome")
const kmInput = document.querySelector("#journey-km");
const selectAge = document.querySelector("#age-range");
const button = document.getElementById("bottone");
let costoDelBiglietto;
const costoAlKm = 0.21;
console.log(costoAlKm);

button.addEventListener("click", function () {
    console.log(nameInput.value);
    console.log(kmInput.value);
    costoDelBiglietto = kmInput.value * costoAlKm;
    console.log(kmInput.value * costoAlKm);
    prova.innerHTML = costoDelBiglietto;





});





