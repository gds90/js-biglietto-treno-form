// MILESTONE 1

// dichiaro una costante button selezionando il bottone in HTML con la classe .calcola
const button = document.querySelector('.calcola');

// aggiungo una funzione al bottone "Calcola prezzo" tramite click
button.addEventListener('click', function(){
    // dichiaro una variabile km prendendo il valore dell'elemento input con id #km
    let km = document.getElementById('km').value;
    console.log(km)
    // dichiaro una variabile eta prendendo il valore dell'elemento input con id #eta
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

    // // MILESTONE 2

    // // dichiaro una variabile nome prendendo il valore dell'elemento input con id #nome
    // let nome = document.getElementById('nome').value;

    // // mostro il nome del passegger a video in HTML
    // document.getElementById('nome_passeggero').innerHTML = nome;

    // // mostro il prezzo finale con eventuale sconto a video in HTML
    // document.getElementById('prezzo_biglietto').innerHTML = ("Il prezzo del biglietto è di €" +  prezzo_biglietto);
})


