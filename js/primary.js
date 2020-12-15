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

var 
