console.log("Bonjour!");

let mySuperH1 = document.getElementsByTagName('h1');
console.log(mySuperH1);

let avc = document.getElementById('test');
console.log(avc);

let toto = document.querySelector('#test');
console.log(toto);

let toto2 = document.getElementsByClassName('test_2');
console.log(toto2);

let testClassP = document.querySelector(".test_p");
console.log(testClassP);

let testId = document.getElementById('test_id');
console.log(testId);

let dataTest = document.querySelector('[data-test]');
console.log(dataTest);

let allPs = document.querySelectorAll('p')[3];
allPs.innerHTML = "hello"; //modifier le texte 
console.log(allPs);

        ///////////ex1

let spanTest = document.querySelector("span");
let string = spanTest.innerHTML;

if (string.length > 2 ) {
    spanTest.remove();
}
console.log(spanTest);

        ////////////ex2

let exE1 = document.getElementById("info");
exE1.innerHTML = "Bonjour, ceci est un nouveau texte.";

        ////////////ex3

let titreImportant = document.querySelectorAll("h2");
let newText = "- Important"

let first = titreImportant[0];
first.innerHTML = first.innerHTML + newText;

let second = titreImportant[1];
second.innerHTML += newText;

let third = titreImportant[2];
third.innerHTML += newText;

console.log(first);
console.log(second);
console.log(third);


// let test1 = 'toto';
// let truc = 'tata';

// truc egal truc + toto
// truc = truc + toto;
// truc += toto;

        ///////////ex4


let supr = document.getElementById("a-supprimer");
supr.remove();
console.log(supr);

        ///////////

// let suprPara = document.querySelectorAll("p");

// for (let index = 0; index < suprPara.length; index++) {  
//      suprPara[index].remove();
// } 
    
// console.log(suprPara)

        //////////////ex5


let listesFruits = document.querySelector("#fruits");

let newList = listesFruits.querySelectorAll("li");

newList[0].innerHTML = "fraise";
newList[1].innerHTML = "kiwi";

console.log(listesFruits);


        //////////////ex6

let rajoutMessage = document.querySelector("#message");
rajoutMessage.innerHTML = "Bienvenue sur la page !";

console.log(rajoutMessage);

        //////////////ex7

let rempla = document.querySelector("#contenu");

rempla.innerHTML = "<h3>Nouveau titre</h3> <p>Nouveau paragraphe</p>";

console.log(rempla);

        //////////////ex8

let exoNames = document.querySelectorAll(".name");

let liNames = document.querySelectorAll("li");

liNames[liNames.length -1].remove();

console.log(exoNames)

        //////////////ex9

let data = document.querySelector("[data-super-div]");
let paragraphes = document.querySelectorAll("p");

const del = "pokemon"

for (const element of paragraphes) {

if (element.innerHTML.includes(del)) {

    element.remove();
}       
}

console.log(data);
