/*
Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer

var giocatore = Math.floor(Math.random() * 6) + 1;

var computer = Math.floor(Math.random() * 6) + 1;

// 2. stabilisco il vincitore in base al punteggio più alto

if (giocatore > computer) {
  console.log(giocatore);
  document.getElementById('vincitore').innerHTML = ("giocatore");
  document.getElementById('numeroGiocatore').innerHTML = (giocatore);
  document.getElementById('numeroComputer').innerHTML = (computer);

} else if (giocatore == computer) {
  document.getElementById('vincitore').innerHTML = ("NESSUNO!");
  document.getElementById('numeroGiocatore').innerHTML = (giocatore);
  document.getElementById('numeroComputer').innerHTML = (computer);

}
 else {
  document.getElementById('vincitore').innerHTML = ("computer");
  document.getElementById('numeroGiocatore').innerHTML = (giocatore);
  document.getElementById('numeroComputer').innerHTML = (computer);
}
