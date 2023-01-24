console.log(`inizio js`);

const nameInput = document.querySelector("#input-nome");

const kmInput = document.querySelector("#journey-km");

const button = document.getElementById("bottone");

const costoAlKm = 0.21;
const costoTicket = (costoAlKm * kmInput);
console.log(costoTicket);

button.addEventListener("click", function () {
    console.log(nameInput.value)


});





