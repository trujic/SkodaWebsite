let main = document.querySelector("main");

let models = document.querySelector("#model");
let wos = document.querySelector("#wos");
let services = document.querySelector("#service");
let company = document.querySelector("#company");

let loadMore = document.querySelector("#loadMore");


//CHANGING SCREEN ON CLICK

const changeMainWhite = () => {
  document.querySelector("main").style.backgroundColor="black";
  document.querySelector("main").style.opacity="0.5";
}

const mainBack = () => {
  document.querySelector("main").style.backgroundColor="white";
  document.querySelector("main").style.opacity="1";
}

main.addEventListener("click", function() {
  document.querySelector(".models-container").style.display="none";
  document.querySelector(".world-of-skoda-container").style.display="none";
  document.querySelector(".services-container").style.display="none";
  document.querySelector(".company-container").style.display="none";
  mainBack();

});

models.addEventListener("click", function() {
  document.querySelector(".models-container").style.display="block";
  document.querySelector(".world-of-skoda-container").style.display="none";
  document.querySelector(".services-container").style.display="none";
  document.querySelector(".company-container").style.display="none";
  changeMainWhite();
})

wos.addEventListener("click", function() {
  document.querySelector(".world-of-skoda-container").style.display="block";
  document.querySelector(".models-container").style.display="none";
  document.querySelector(".services-container").style.display="none";
  document.querySelector(".company-container").style.display="none";
  changeMainWhite();
});

services.addEventListener("click", function() {
  document.querySelector(".services-container").style.display="block";
  document.querySelector(".models-container").style.display="none";
  document.querySelector(".world-of-skoda-container").style.display="none";
  document.querySelector(".company-container").style.display="none";
  changeMainWhite();
});

company.addEventListener("click", function() {
  document.querySelector(".company-container").style.display="block";
  document.querySelector(".models-container").style.display="none";
  document.querySelector(".world-of-skoda-container").style.display="none";
  document.querySelector(".services-container").style.display="none";
  changeMainWhite();
});

let toTop = document.querySelector("#backToTop");

window.onscroll = function(){
  document.querySelector("#backToTop").style.display="block";
};

toTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//Loads more news1
loadMore.addEventListener("click", function() {
  document.querySelector(".load-more").style.display="block";
  document.querySelector("#loadMore").style.display="none";
});
