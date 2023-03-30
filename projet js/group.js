const personnes = ["Personne 1", "Personne 2", "Personne 3", "Personne 4", "Personne 5", "Personne 6", "Personne 7", "Personne 8", "Personne 9", "Personne 10"];

const nombreDeGroupes = 2;
const nombreDePersonnesParGroupe = 5;

function genererGroupes() {
  for (let i = 0; i < nombreDeGroupes; i++) {
    const groupe = [];
    for (let j = 0; j < nombreDePersonnesParGroupe; j++) {
      const indexAleatoire = Math.floor(Math.random() * personnes.length);
      const personne = personnes.splice(indexAleatoire, 1)[0];
      groupe.push(personne);
    }
    console.log("Groupe " + (i + 1) + ": " + groupe.join(", "));
  }
}

genererGroupes();