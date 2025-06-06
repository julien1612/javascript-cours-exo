let map = L.map("map");
map.setView([45.78,  3.08], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let inputRecherche = document.querySelector(".recherche");
console.log(inputRecherche);

let boutonRecherche = document.querySelector(".rechercher");
console.log(boutonRecherche);




//  https://nominatim.openstreetmap.org/search?q=MONTPELLIER&format=json  //remplacer le montpellier par l'input: (https://nominatim.openstreetmap.org/search?q=" + inputRecherche.value + "&format=json")

boutonRecherche.addEventListener("click", () => {
   
  fetch(
    `https://nominatim.openstreetmap.org/search?q=${inputRecherche.value}&format=json`
  ) 

    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      if (data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      } else {
        let marker = L.marker([data[0].lat, data[0].lon]).addTo(map);
        map.setView([data[0].lat, data[0].lon], 13);
        marker.bindPopup(inputRecherche.value);
      }
    });
});
