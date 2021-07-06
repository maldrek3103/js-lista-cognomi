// Array con cognomi
var lastNameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.table(lastNameList);


// Chiedi all’utente il cognome finchè non inserisce un valore valido
var lastName;
do {
    lastName = prompt('What is your last name?');
} while (!isNaN(lastName));


// Inserisce il cognome dell'utente all'interno dell'array
if (lastName !== true) {
    lastNameList.push(lastName);
}


// Converte la prima lettera di ogni stringa all'interno dell'array toUpperCase
for (var i = 0; i < lastNameList.length; i++) {
    lastNameList[i] = lastNameList[i].charAt(0).toUpperCase() + lastNameList[i].slice(1);
}


// Stampa la lista ordinata
console.table(lastNameList.sort());

var getElem = document.getElementById('lastnames');

for (var i = 0; i < lastNameList.length; i++) {
    getElem.innerHTML += '<li>' + lastNameList[i] + ' ' + (i + 1) + '</li>';
}




