// Esercizio 1

var mail = prompt('Inserisci la tua email');
var iscritti = ['sebastiano.lanfranchi@gmail.com','qwerty@gmail.com'];


 if (iscritti.includes(mail)){
   document.getElementById('outputEmail').innerText = 'Accesso completato'
 }
else {
  document.getElementById('outputEmail').innerText = 'Accesso negato'
}

// Esercizio 2

var sceltaUtente = parseInt(prompt('inserisci un numero da 1 a 6'));
var sceltaPc = parseInt(Math.floor(Math.random() * 5) +1);
document.getElementById('scelta1').innerText = 'La tua scelta:' + sceltaUtente;
document.getElementById('scelta2').innerText = 'La scelta del pc:' + sceltaPc;
if (sceltaUtente > sceltaPc){
 document.getElementById('outputDadi').innerText = 'Hai vinto'
}
if (sceltaUtente < sceltaPc) {
  document.getElementById('outputDadi').innerText = 'Hai perso'
}
if (sceltaUtente === sceltaPc){
  document.getElementById('outputDadi').innerText = 'Hai pareggiato'
}
if(sceltaUtente === 0 || sceltaUtente > 6){
  document.getElementById('outputDadi').innerText = 'Non barare e non rompermi il codice!'
}
