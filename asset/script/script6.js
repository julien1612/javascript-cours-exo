//setItem récuperer les données
// localStorage.setItem("first_name", "julien");
// localStorage.setItem("last_name", "CHASSIN");

// //getItem sauvgarder les données
// let firstName = localStorage.getItem("first_name");
// console.log(firstName);

// //supprimer un item
// //localStorage.clear("firs_tName");

// //stocker un tableau en entier dans le localStrorage
// let array = ["toto" , "tata"];
// console.log(array);

//utiliser JSON.stringify (pour encoder) tranformer mon tableau
// let jsonArray = JSON.stringify(array); // string qui représente mon tableau
// console.log(jsonArray);
// localStorage.setItem("array" , jsonArray);

//encoder du JSON
//récupérer les éléments du local
// let arrayFromStrorage = localStorage.getItem("array");
// let arrayDecoded = JSON.parse(arrayFromStrorage);
// console.log(arrayDecoded);

////////////////////////

let form = document.querySelector(".formulaire"); // variable formulaire

let inputElementName = document.querySelector(".name"); // variable nom

let inputElementRace = document.querySelector("#race"); // variable race

let boutonRelacher = document.querySelector(".relacher"); // variable bouton supr

let boutonAdopter = document.querySelector(".adopter"); // variable bouton adopter

let para = document.querySelector(".paragraphe"); // variable conteneur paragraphe

form.addEventListener("submit", (e) => {
  // action du bouton adopter

  e.preventDefault();

  para.innerHTML = ""; // remet les saisi vide au début (rafraich)

  localStorage.setItem("animal_nom", inputElementName.value);

  localStorage.setItem("animal_race", inputElementRace.value);

  let totalite = document.createElement("p");
  totalite.innerHTML = inputElementName.value + inputElementRace.value; // paragraphe + les valeurs des input saisi
  para.appendChild(totalite);
});

boutonRelacher.addEventListener("click", () => {
  para.innerHTML = ""; // remise a 0 click bouton relacher
  localStorage.clear("animal_race");
  localStorage.clear("animal_name");
});
let nameAnimal = localStorage.getItem("animal_nom"); //variable avec la valeur de localStrorage
let race = localStorage.getItem("animal_race");

if (nameAnimal.value === null && race.value === null) {
  //si rien dans le conteneur para, affiche rien est pas 0
  para.innerHTML = "";
}

let memoireName = document.createElement("p"); // l'image qui reste quand je rafraich
memoireName.innerHTML = nameAnimal + race;
para.appendChild(memoireName);
