
let forceUtilisateur = 10;
let vieDuChat = 100;


let strong = document.querySelector("#force");
strong.innerHTML = forceUtilisateur;
console.log(strong);

let life = document.querySelector("#vie");
life.innerHTML = vieDuChat;
console.log(life);

let chatImg = document.querySelector("img");
chatImg.addEventListener ('click', () =>  {
    vieDuChat -= forceUtilisateur;
    life.innerHTML = vieDuChat;

    if(vieDuChat < 0) {
        vieDuChat = 0;
    }

    if (vieDuChat <= 0) {
        alert("vous avez tuer le chat!");
       chatImg.src="images/explosion.gif ";
        setTimeout(() => {
           chatImg.remove()
       }, "700") 

    } 
       
})



