let inputElementSorcier1 = document.querySelector(".nomSorcier1");
//valeur sorcier 1
console.log(inputElementSorcier1);

let inputElementSorcier2 = document.querySelector(".nomSorcier2");
//valeur sorcier 2
console.log(inputElementSorcier2);

let inputElementMaisonS1 = document.querySelector("#maisonDuSorcier1");
//valeur maison sorcier 1
console.log(inputElementMaisonS1);

let inputElementMaisonS2 = document.querySelector("#maisonDuSorcier2");
//valeur maison sorcier 2
console.log(inputElementMaisonS2);

let form = document.querySelector(".formulaire");
//la totalité du formulaire
console.log(form);

let para = document.querySelector(".paragraphe");
//paragraphe
console.log(para);

let buttonSubmit = document.querySelector(".buttonGoDuel");
// bouton lancer le duel
console.log(buttonSubmit);

pvPlayer1 = 200;
pvPlayer2 = 200;
playerName1 = inputElementSorcier1.value;
playerName2 = inputElementSorcier2.Value;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let tour = 0;
  while (pvPlayer1 > 0 && pvPlayer2 > 0) {
    let dommage = 10;
    let dommage2 = 15;
    pvPlayer1 -= dommage;
    pvPlayer2 -= dommage2;
    tour++;

    let historiqueP1 = document.createElement("p");
    historiqueP1.innerHTML =
      "Tour " +
      tour++ +
      " : " +
      inputElementSorcier1.value +
      " attaque " +
      inputElementSorcier2.value +
      " pour " +
      dommage +
      " dégâts." +
      " Il reste " +
      pvPlayer1 +
      " PV à " +
      inputElementSorcier2.value;
    para.appendChild(historiqueP1);

    let historiqueP2 = document.createElement("p");
    historiqueP2.innerHTML =
      "Tour " +
      tour +
      " : " +
      inputElementSorcier2.value +
      " attaque " +
      inputElementSorcier1.value +
      " pour " +
      dommage2 +
      " dégâts." +
      " Il reste " +
      pvPlayer2 +
      " PV à " +
      inputElementSorcier1.value;
    para.appendChild(historiqueP2);

    let win = document.createElement("p");
    if (pvPlayer1 < 0) {
      win.innerHTML = inputElementSorcier1.value + " à gagner!!!";
    } else if (pvPlayer2 < 0) {
      win.innerHTML = inputElementSorcier2.value + " à gagner!!!";
    }
    para.appendChild(win);
  }
});
