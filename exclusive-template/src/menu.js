// Responsive Menu Toggle
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-style");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
// user dropdown
const userBtn = document.querySelector(".user-btn");
const userDrop = document.querySelector(".user-drop");

userBtn.addEventListener("click", function(e){
  e.stopPropagation();
  userDrop.classList.toggle("active");
});

document.addEventListener("click", function(){
  userDrop.classList.remove("active");
});