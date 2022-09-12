const toggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav");

toggler.addEventListener("click", (e) => {
  nav.classList.toggle("nav__expanded")
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    //ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});


const accordion = document.querySelectorAll(".accordion");
console.log(accordion);
for(let i=0; i<accordion.length; i++){
  accordion[i].addEventListener('click', ()=>{
    accordion[i].classList.toggle("accordion__expanded")
  })
}
// accordion.addEventListener("click", (e) => {
//   accordion.classList.toggle("accordion__expanded")
// });