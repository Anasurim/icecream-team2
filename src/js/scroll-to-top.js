// Get the button:
// let mybutton = document.getElementById('myBtn');

// // When the user scrolls down 30px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     mybutton.style.display = 'flex';
//   } else {
//     mybutton.style.display = 'none';
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

const showOnPx = 100;
const backToTopButton = document.querySelector('.btn--to-top');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

const goToTop = () => {
  document.body.scrollIntoView({ behavior: 'smooth' });
};

backToTopButton.addEventListener('click', goToTop);
