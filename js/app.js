const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    const ul = document.querySelector("nav > ul"); 
    ul.classList.toggle("menuSlide");
    hamburger.classList.toggle("cross");
});