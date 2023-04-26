// Variables
    let userName, userSurname, userColour, userPassword;
    // const userName, userSurname, userColour;


// Chiedi all’utente il suo nome
userName = prompt("Inserisci il tuo nome");

console.log(userName);


// Chiedi il suo cognome

userSurname = prompt("Inserisci il tuo cognome");

console.log(userSurname);


// Chiedi il suo colore preferito

userColour = prompt("Inserisci il tuo colore preferito");

console.log(userColour);


// Generazione Password = nomecognomecolorepreferito21

userPassword = userName + userSurname + userColour + 21

console.log(userPassword);

//Scrivi sulla pagina la nuova password generata

document.getElementById("pwdGen").innerHTML = "Your new password is " + userPassword
