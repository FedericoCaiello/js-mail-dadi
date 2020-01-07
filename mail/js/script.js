var email = ['federico@gmail.com', 'marco@gmail.com','stefano@gmail.com', 'antonio@gmail.com'];
var emailUtente = prompt('inserisci la tua email');
for (var i = 0; i < email.length; i++) {
  // console.log(email[i]);
  var emailEsatta = email[i];
  if (emailEsatta == 'federico@gmail.com') {
    console.log(emailEsatta);
  }
}
