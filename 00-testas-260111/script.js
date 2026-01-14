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

// Vertimų objektas
// const vertimai = {
//   lt: {
//     sveiki: 'Sveiki atvykę',
//     aprasymas: 'Tai yra lietuviškas tekstas.',
//   },
//   en: {
//     sveiki: 'Welcome',
//     aprasymas: 'This is a text in English.',
//   },
// };

// function keistiKalba(kalba) {
//   const elementai = document.querySelectorAll('[data-key]');
//   elementai.forEach((el) => {
//     const raktas = el.getAttribute('data-key');
//     el.textContent = vertimai[kalba][raktas];
//   });
// }
