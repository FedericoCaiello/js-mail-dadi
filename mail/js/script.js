var email = ["federico@gmail.com","nino@gmail.com","stefano@gmail.com","antonio@gmail.com"];
console.log(email[0])
var sceltaUtente = prompt('inserisci la tua email');
  console.log(sceltaUtente);
var trovato = false;
alert('scelta errata, la tua email e\' sbagliata')
for (var i = 0; i<email.length; i++){
  var emailEsatta = email[i];
  if (sceltaUtente == emailEsatta) {
    trovato = true;
    alert('benvenuto nella tua email')

  }
}
console.log(trovato);
