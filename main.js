// ESERCIZIO 1 creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore

var student = {
    'name': 'Valentina',
    'surname': 'Novarino',
    'age': 25
};
// console.log(student);

console.log("ESERCIZIO 1");
// Stampa a schermo tutte le proprietà e il valore dell'oggetto
for(var key in student){
    console.log(key + ": " + student[key]);
}

// ESERCIZIO 2 creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome

var students = [
    {
        'name': 'Mario',
        'surname': 'Rossi',
        'age': '45'
    },
    {
        'name': 'Anna',
        'surname': 'Bianchi',
        'age': '32'
    },
    {
        'name': 'Piero',
        'surname': 'Ferrari',
        'age': '76'
    }
];

console.log("ESERCIZIO 2");
  for (var i = 0; i < students.length; i++) {
      console.log("Studente " + (i+1));
      for(var key in students[i]){
          if(key == "name" || key == "surname" )
          console.log(key + ": " + students[i][key]);
      }
  }
