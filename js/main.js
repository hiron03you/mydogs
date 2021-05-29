"use strict"; 

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");
  const dici = document.getElementById("dici");
  const dici2 = document.getElementById("dici2");
  const dici3 = document.getElementById("dici3");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  dici.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  dici2.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  dici3.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });
}