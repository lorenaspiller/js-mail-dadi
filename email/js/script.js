/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// 1. Chiedi all’utente la sua email
var mail = prompt("inserisci la tua mail");

// 2. controlla che sia nella lista di chi può accedere

var listaMail = ["andrea@gmail.com", "maria@gmail.com", "a@b.com", "carlo@gmail.com"];
accesso = false;

for (var i = 0; i < listaMail.length; i++) {
  if (listaMail[i] === mail) {
    accesso = true;
  }
}

if (accesso == true) {
  document.getElementById('mail').innerHTML = ("Puoi accedere.");
} else {
  document.getElementById('mail').innerHTML = ("NON puoi accedere.");
}
