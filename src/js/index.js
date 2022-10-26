const buttonHome = document.getElementById("button-home");
const buttonDlc = document.getElementById("button-dlc");
const buttonOpenw = document.getElementById("button-openw");
const buttonHunter = document.getElementById("button-hunter");

const mainOpenw = document.querySelector(".main-openw");
const thumbOpenw1 = document.querySelector(".thumb-openw1");
const thumbOpenw2 = document.querySelector(".thumb-openw2");
const thumbOpenw3 = document.querySelector(".thumb-openw3");

const mainHunter = document.querySelector(".main-hunter");
const thumbHunter1 = document.querySelector(".thumb-hunter1");
const thumbHunter2 = document.querySelector(".thumb-hunter2");
const thumbHunter3 = document.querySelector(".thumb-hunter3");

window.history.pushState("", "", "/");

thumbHunter1.addEventListener("click", function () {
  mainHunter.setAttribute("src", "src/img/Hunter/monsterhunter-hunts-1.jpg");
  thumbHunter2.classList.remove("selecionado-hunter");
  thumbHunter3.classList.remove("selecionado-hunter");
  thumbHunter1.classList.add("selecionado-hunter");
});
thumbHunter2.addEventListener("click", function () {
  mainHunter.setAttribute("src", "src/img/Hunter/monsterhunter-hunts-2.jpg");
  thumbHunter1.classList.remove("selecionado-hunter");
  thumbHunter3.classList.remove("selecionado-hunter");
  thumbHunter2.classList.add("selecionado-hunter");
});
thumbHunter3.addEventListener("click", function () {
  mainHunter.setAttribute("src", "src/img/Hunter/monsterhunter-allies-2.jpg");
  thumbHunter1.classList.remove("selecionado-hunter");
  thumbHunter2.classList.remove("selecionado-hunter");
  thumbHunter3.classList.add("selecionado-hunter");
});





thumbOpenw1.addEventListener("click", function () {
  mainOpenw.setAttribute("src", "src/img/OpenW/openworld-exploration-1.jpg");
  thumbOpenw2.classList.remove("selecionado-openw");
  thumbOpenw3.classList.remove("selecionado-openw");
  thumbOpenw1.classList.add("selecionado-openw");
})

thumbOpenw2.addEventListener("click", function () {
    mainOpenw.setAttribute("src", "src/img/OpenW/openworld-exploration-2.jpg");
    thumbOpenw1.classList.remove("selecionado-openw");
    thumbOpenw3.classList.remove("selecionado-openw");
    thumbOpenw2.classList.add("selecionado-openw");
})

thumbOpenw3.addEventListener("click", function () {
  mainOpenw.setAttribute("src", "src/img/OpenW/openworld-exploration-3.jpg");
  thumbOpenw1.classList.remove("selecionado-openw");
  thumbOpenw2.classList.remove("selecionado-openw");
  thumbOpenw3.classList.add("selecionado-openw");
});
















buttonHome.style.color = "#BF0A1B";
buttonHome.addEventListener("click", function () {
  buttonDlc.removeAttribute("style");
  buttonOpenw.removeAttribute("style");
  buttonHunter.removeAttribute("style");

  this.style.color = "#BF0A1B";
});

buttonDlc.addEventListener("click", function () {
  buttonHome.removeAttribute("style");
  buttonHunter.removeAttribute("style");
  buttonOpenw.removeAttribute("style");

  this.style.color = "#BF0A1B";
});

buttonOpenw.addEventListener("click", function () {
  buttonHome.removeAttribute("style");
  buttonDlc.removeAttribute("style");
  buttonHunter.removeAttribute("style");

  this.style.color = "#BF0A1B";
});

buttonHunter.addEventListener("click", function () {
  buttonHome.removeAttribute("style");
  buttonDlc.removeAttribute("style");
  buttonOpenw.removeAttribute("style");

  this.style.color = "#BF0A1B";
});
