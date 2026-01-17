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

let lastScrollTop = 0; // Kintamasis paskutinei skrolinimo pozicijai saugoti
const header = document.querySelector('header');

window.addEventListener(
  'scroll',
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 1) {
      // Jei skroliname žemyn IR esame nuėję bent 1px nuo viršaus
      header.classList.add('header-hidden');
    } else {
      // Jei skroliname į viršų
      header.classList.remove('header-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Atnaujiname poziciją
  },
  false
);

