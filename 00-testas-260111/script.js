// Ši eilutė suranda elementą su ID "metai" ir įrašo į jį dabartinius metus
document.getElementById('metai').textContent = new Date().getFullYear();

// Ši funkcija atnaujina progreso juostą, kai vartotojas slenka puslapiu
//     window.onscroll = function() {
//     let langas = document.documentElement;
//     let virsus = langas.scrollTop;
//     let aukstis = langas.scrollHeight - langas.clientHeight;
//     let procentas = (virsus / aukstis) * 100;
//     document.getElementById("progresas").style.width = procentas + "%";
// };
