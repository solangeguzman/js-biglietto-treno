var numberKm = prompt("Quanti km percorrerai?")
var age = prompt("Quanti anni hai?")

var priceTicket = parseInt(numberKm) * 0.21;
var sconto1 = priceTicket / 100 * 20;
var sconto2 = priceTicket /100 * 40;
var totPrice= priceTicket - sconto;

if ( age < 18) {
    document.getElementById("output").innerHTML += (priceTicket - sconto1).toFixed(2);
}else if (age > 65) {
    document.getElementById("output").innerHTML += (priceTicket - sconto2).toFixed(2);
}else {
    document.getElementById("output").innerHTML += (totPrice).toFixed(2);
}


