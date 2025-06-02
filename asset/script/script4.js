//la valeur de la zone de texte name
let inputElementName = document.querySelector(".zoneTextName");
// console.log(inputElementName);

//la valeur de la zone de texte prenom
let inputElementfirstName = document.querySelector(".zoneTextFirtName");
// console.log(inputElementfirstName);

//la valeur de la zone de texte age
let inputElementAge = document.querySelector(".zoneTextAge");

// mon questionnaire homme / femme 
let radios = document.querySelectorAll(".quest");

let inputElementprofession = document.querySelector("#selectProfession");

let inputElementRegion = document.querySelector("#selectRegion");

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


  displayName();
  displayFirstName();
  displayAge();
  displaySexHomme();
  displayPro();
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

function displayAge() {
  let textAge = inputElementAge.value;
  console.log(textAge);

  let listAge = document.createElement("li");
  listAge.innerHTML = textAge;
  conteneurUl.appendChild(listAge);
}

function displaySexHomme() {

    for (let index = 0; index < radios.length; index++) {
        if(radios[index].checked){
            radios[index].value
            console.log(radios[index].value)
              let listSex = document.querySelector("li");
             listSex.innerHTML = radios[index].value
                conteneurUl.appendChild(listSex);
        } 
    }
}

function displayPro() {
    let selectPro = inputElementprofession.value;
    console.log(selectPro);

    let listPro = document.createElement("li");
    listPro.innerHTML = selectPro;
    conteneurUl.appendChild(listPro);
}

function displayRegion() {
    let selectRegion = inputElementRegion.value;
    console.log(selectRegion);

    let listRegion = document.querySelector("li");
    listRegion.innerHTML = selectRegion;
    conteneurUl.appendChild(listRegion); 
}

















