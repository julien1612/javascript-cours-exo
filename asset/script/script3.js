let inputElement = document.querySelector("#zoneText");
let boutonAjouter = document.querySelector("#ajouter");
let boutonSuppr = document.querySelector("#supprimer");
let conteneurUl = document.querySelector("#affichage");

boutonAjouter.addEventListener("click", () => {
  let texte = inputElement.value;

  if (texte !== "") {
    let maListe = document.createElement("li");
    maListe.innerHTML = texte;
    conteneurUl.appendChild(maListe);

    maListe.addEventListener("click", () => {
      maListe.classList.toggle("barre");
    });
  }
});

boutonSuppr.addEventListener("click", () => {
  conteneurUl.innerHTML = "";
  console.log(boutonSuppr);
});

//BUT Global : créer un element html LI qu'on va mettre dans le conteneur ul

//1 : créer l'élément LI avec : createElement
//2: lui ajouter le contenue de la valeur de l'input avec : innerHTML

//3: ajouter un evenement au clic sur mon li
//4: ajouter la class qui permet de lui dire ok c'est fait : classList

//FIN : conteneur ul -> ajouer le li : avec appendChild logique c'est conteneur -> appendChild -> li
