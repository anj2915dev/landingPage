const btnMenu=document.querySelector(".btn__menu")
const menu=document.querySelector(".menu")

btnMenu.addEventListener("click", showMenu)
function showMenu(){
menu.classList.toggle("h-0")
menu.classList.toggle("h-48")
}



const sr = new ScrollReveal({
  reset: true,
  distance: "20px",

  origin: "top",
 
  scale: 1,
  viewFactor: 0,
 
});
sr.reveal(".opinions", {
  delay: 400,
  duration: 200,
});

sr.reveal(".Opinion", {
  delay: 500,
  interval: 200,
  delay: 500,
});
sr.reveal(".status", {
  delay: 500,
  interval: 200,
  delay: 500,
});
sr.reveal(".img", {
  delay: 300,
});
sr.reveal(".content__text", {
  delay: 500,
  origin: "bottom",

});
sr.reveal(".title", {
  delay: 200,
});
sr.reveal(".why", {
  delay: 200,
});
