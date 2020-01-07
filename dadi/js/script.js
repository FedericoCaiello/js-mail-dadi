
var numeriDado = [1,2,3,4,5,6]
alert('player1')
var numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer1);

alert('player2')
var numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer2);



if (numeroPlayer1 > numeroPlayer2) {
  console.log('vince giocatore 1')
  document.getElementById('numero').innerHTML ="numero: " + numero;
  alert('hai vinto')
}
else if (numeroPlayer1 < numeroPlayer2) {
  console.log('vince giocatore 2')
  alert('vince giocatore 2')
}
else {
  console.log('pareggio')
  alert('pareggio')
}
