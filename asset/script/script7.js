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

                /////////////////////

// commencer par créer le formulaire ***
//le récuprérer avec des variables ***
// les input des variables => dans tableau 
//afficher les tableaux dans une card 
//garder les card affiché sur l'ecran et dans le localStorage 
// bouton vider pour tout remettre a 0 (ecran nav et localStrorage)

                /////////////////////

let form = document.querySelector(".formulaire");

let inputElementName = document.querySelector(".nameCard");
console.log(inputElementName);

let inputElementType = document.querySelector("#type");
console.log(inputElementType);

let inputElementPower = document.querySelector(".powerCard");
console.log(inputElementPower);

let boutonAjouter = document.querySelector(".ajouter");
console.log(boutonAjouter);

let boutonSuprimer = document.querySelector(".supprimer");
console.log(boutonSuprimer);

let para = document.querySelector(".paragraphe");
                


form.addEventListener("submit", (e) => {
 e.preventDefault();

 let objet = {      // objet qui récupére mes valeurs
    'name' : inputElementName.value,
    'type' : inputElementType.value ,
    'pouvoir' : inputElementPower.value
 }

localStorage.setItem('mysteryCard', JSON.stringify(objet)); // JSON tranforme en string pour pouvoir stocker dans localStorage

let totalCard = document.createElement("p");
totalCard.innerHTML = objet.name + objet.type + "Type : " + objet.pouvoir;
para.appendChild(totalCard);


    });

    boutonSuprimer.addEventListener("click", () => {
    para.innerHTML = "";
    inputElementName.value = "";
    inputElementType.value = "";
    inputElementPower.value = "";

  });