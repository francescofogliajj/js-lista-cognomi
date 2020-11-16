// Chiedere all’utente il cognome,
var cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
var listaCognomi = ["Pesce", "Castenetto", "Passaro", "Grimaldi", "Rossi", "Verdi", "Bianchi"];
console.log(listaCognomi);

listaCognomi.push(cognome);
console.log(listaCognomi);

// Stampa la lista ordinata alfabeticamente.
listaCognomi.sort();
console.log(listaCognomi);

for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  document.getElementById("lista").innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
console.log(listaCognomi.indexOf(cognome) + 1);
document.getElementById("posizione").innerHTML = "La posizione del tuo cognome è " + (listaCognomi.indexOf(cognome) + 1);
