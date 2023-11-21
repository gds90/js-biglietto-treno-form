// MILESTONE 1

// dichiaro una costante button selezionando il bottone in HTML con la classe .btn
const button = document.querySelector('.btn');

// aggiungo una funzione al bottone tramite click
button.addEventListener('click', function(){
    // dichiaro una variabile km prendendo l'elemento input con id #km
    let km = document.getElementById('km').value;
    
    // dichiaro una variabile eta prendendo l'elemento input con id #eta
    let eta = document.getElementById('eta').value;
    
    // calcolo il prezzo del biglietto in base ai km da percorrere
    let prezzo_biglietto = km * 0.21;
    
    // applico gli sconti in base all'età del passeggero
    if (eta < 18) {
        // sconto del 20% per i minorenni
        prezzo_biglietto *= 0.8;
    } else if (eta >= 65) {
        // sconto del 40% per gli over 65
        prezzo_biglietto *= 0.6;
    }
   
    // formatto il prezzo con max due decimali 
    prezzo_biglietto = prezzo_biglietto.toFixed(2);

    // stampo il prezzo finale con eventuale sconto in console
    console.log("Il prezzo del biglietto è di €" +  prezzo_biglietto);
})

