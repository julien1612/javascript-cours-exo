
let inputNameCocktails = document.querySelector(".name");

let boutonRecherche = document.querySelector(".rechercher");

let boutonAleatoire = document.querySelector(".aléatoire");

let cardDiv = document.querySelector(".card-body"); 


boutonRecherche.addEventListener("click", () => {

 cardDiv.innerHTML = ""

 fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputNameCocktails.value) 
.then((Response) => {
     return Response.json();
}) 
.then((data) => {


for (let index = 0; index < data.drinks.length; index++) {
  let titre = document.createElement("h2")
titre.innerHTML = data.drinks[index].strDrink;
cardDiv.appendChild(titre);
 let texte = document.createElement("p")
texte.innerHTML = data.drinks[index].strInstructionsFR;
cardDiv.appendChild(texte);










}


  

  






















console.log(data)





let arrayIngredient = [];
        let objet = data.drinks[0];
        for (j = 1; j < 16; j++){
            let stringIngredient = "strIngredient" + j;
            if(objet[stringIngredient] !== null){
                arrayIngredient.push(objet[stringIngredient]);
                 
            }
           
        }
        console.log(arrayIngredient);



 });


});


















// let texte = document.createElement("p")
// texte.innerHTML = data.drinks[0].strIngredient1 + " " + data.drinks[0].strIngredient2 + " " + data.drinks[0].strIngredient3 + " " + data.drinks[0].strIngredient4 + " " + data.drinks[0].strIngredient5 + "." + " " + data.drinks[0].strInstructionsFR
// cardDiv.appendChild(texte);