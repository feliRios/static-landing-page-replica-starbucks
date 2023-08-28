// Footer funcionalities

const listas = document.getElementsByClassName('footer-list-click');
const arrListas = Array.from(listas);
let disp;

if(window.innerWidth < 1025)
{
  arrListas.forEach((e) => {
    e.addEventListener('click', () => {
      const list = e.classList
      switch (list[0]) {
        case "about-us-click":
          disp = document.querySelector('.about-us-list');
          disp.classList.toggle('active-list');
          break;
      
        case "social-impact-click":
          disp = document.querySelector('.social-impact-list');
          disp.classList.toggle('active-list');
          break;

        case "client-support-click":
          disp = document.querySelector('.client-support-list');
          disp.classList.toggle('active-list');
          break;
        
        case "starbucks-experience-click":
          disp = document.querySelector('.starbucks-experience-list');
          disp.classList.toggle('active-list');
          break;

        default:
          break;
      }
    })
  })
}
