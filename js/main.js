
// Chiedi all’utente il suo nome
const userName = prompt("Inserisci il tuo nome");

console.log(userName);


// Chiedi il suo cognome

const userSurname = prompt("Inserisci il tuo cognome");

console.log(userSurname);


// Chiedi il suo colore preferito

const userColour = prompt("Inserisci il tuo colore preferito");

console.log(userColour);


// Generazione Password = nomecognomecolorepreferito21

const userPassword = userName + userSurname + userColour + 21

console.log(userPassword);

//Scrivi sulla pagina la nuova password generata

document.getElementById("pwdGen").innerHTML = "Your new password is: " + userPassword
