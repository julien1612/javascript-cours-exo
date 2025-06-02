//la valeur de la zone de texte name
let inputElementName = document.querySelector(".zoneTextName");
// console.log(inputElementName);

//la valeur de la zone de texte prenom
let inputElementfirstName = document.querySelector(".zoneTextFirtName");
// console.log(inputElementfirstName);

//la valeur de la zone de texte age
let inputElementAge = document.querySelector(".zoneTextAge");

//bouton pour sommettre
let buttonSubmit = document.querySelector(".buttonForm");
// console.log(buttonSubmit);

let form = document.querySelector(".formNamefirstName");
// console.log(form)

let conteneurUl = document.querySelector(".card-title");

//ajouter un evenement à la soumission
form.addEventListener("submit", (e) => {
  //permet d'arreter la soumission du formulaire
  e.preventDefault();

  // new variable textName on lui donne la valeur inputElementName

  // new variable textName on lui donne la valeur inputElementfirstName
  let textFirstName = inputElementfirstName.value;
  console.log(textFirstName);

  // new variable textAge on lui donne la valeur inputElementAge
  let textAge = inputElementAge.value;
  console.log(textAge);

  displayName();
  displayFirstName();
});

function displayName() {
  let textName = inputElementName.value;
  console.log(textName);

  let listName = document.createElement("li");
  listName.innerHTML = textName;
  conteneurUl.appendChild(listName);
}

function displayFirstName() {
  let textFirstName = inputElementfirstName.value;
  console.log(textFirstName);

  let listFirstName = document.createElement("li");
  listFirstName.innerHTML = textFirstName;
  conteneurUl.appendChild(listFirstName);
}
