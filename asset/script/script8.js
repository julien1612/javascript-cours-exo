// let body = document.querySelector("body");
// fetch ("https://api.adviceslip.com/advice").then ((reponse) => { // demande requete API (then = "alors" pour faire une action)
// return reponse.json();
// }) .then((data) => {
//     console.log(data);
//     //data.slip.advice

//     let para = document.createElement("tagName");
// para.innerHTML = data.slip.advice;
// console.log(para);
// });

//////////////////////////

let boutonCitations = document.querySelector(".citations");
// console.log(boutonCitations)
let content = document.querySelector(".content");

boutonCitations.addEventListener("click", () => {
  fetch("https://kaamelott.xyz/api/v1/quote/random")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data.content);

      // pour encadrer mon texte

      let cardDiv = document.createElement("div"); // créer une carte conteneur
      cardDiv.classList.add("card");



      let cardBody = document.createElement("div"); // créer une autre carte dans le conteneur 
      cardBody.classList.add("card-body");

      let cita = document.createElement("p"); // créer mon para à l'intérieure 
      cita.innerHTML = data.content;

      cardBody.append(cita);
      cardDiv.append(cardBody); // insérer le para dans la carte qui est dans la carte conteneur
      content.append(cardDiv);


    //   content.insertAdjacentHTML('beforeend', `
    //     <div class="card">                           // autre solution ou on créer une directement du HTML dans js avec "content.insertAdjacentHTML"
    //             <p>${data.content}</p>
    //         </div>
    //     </div>
    //     `)


    });
});
