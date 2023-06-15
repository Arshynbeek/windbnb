var check = false;
function action() {
  if (check === false) {
    document.querySelector("#window").style.display = "flex";
    check = true;
  } else {
    document.querySelector("#window").style.display = "none";
    check = false;
  }
}

function filterWindow() {
  document.getElementById("atom-input-filter__block").style.display = "flex";
}

function closeFilterWindow() {
  document.getElementById("atom-input-filter__block").style.display = "none";
}

function filter() {
  var cards = document.getElementsByClassName("cards");
  var key = +document.getElementById("atom-input-filter__key").value;
  var ratings = document.getElementsByClassName("atom-text-cardrating__rating");
  var index = 0;

  for (var i of ratings) {
    if (i.textContent < key) {
      cards[index].style.display = "none";
    } index++;
  }

  document.getElementById("atom-input-filter__block").style.display = "none";
}

function openLocations() {
  document.querySelector("#location-list").style.display = "grid";
  document.querySelector("#guest-list").style.display = "none";
  document.getElementsByClassName("molecule-search-label__location-button").style.border = "1px solid black";
}

function openGuests() {
  document.querySelector("#guest-list").style.display = "grid";
  document.querySelector("#location-list").style.display = "none";
  document.getElementsByClassName("molecule-search-label__guest-button").style.border = "1px solid black";
}

const Adults = document.getElementById("adult-number");
const Childrens = document.getElementById("child-number");
const Guest = document.getElementById("molecule-search-label__guest-text");
const Guests = document.getElementById("molecule-search-block__guest-button-text");

var guests = 0, a = 0, c = 0;

function plusAdults() {
  a++;
  Adults.textContent = a;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function minusAdults() {
  if (a > 0) a--;
  Adults.textContent = a;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function plusChildrens() {
  c++;
  Childrens.textContent = c;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function minusChildrens() {
  if (c > 0) c--;
  Childrens.textContent = c;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function change(id) { 
  const location = document.getElementById("molecule-search-block__location-button-text");
  const ilocation = document.getElementById("molecule-search-label__location-text");
  const flocation = document.getElementById(id);
  ilocation.textContent = flocation.textContent;
  location.textContent = flocation.textContent
}

function mode() {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");

  if (dark.style.display === "none") {
    dark.style.display = "initial";
    light.style.display = "none";

    document.documentElement.style.setProperty("--main-color", "#000000");
    document.documentElement.style.setProperty("--shadow", "#e6e6e6");
    document.documentElement.style.setProperty("--white", "#ffffff");
    document.documentElement.style.setProperty("--gray", "#828282");

    for(var i of document.getElementsByClassName("atom-button-optionlocation__pin-icon")) {
      i.classList.remove("mode");
    }
  } else {
    dark.style.display = "none";
    light.style.display = "initial";
    
    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--shadow", "#ffffff");
    document.documentElement.style.setProperty("--white", "#1e1e1e");
    document.documentElement.style.setProperty("--gray", "#ffffff");

    for(var i of document.getElementsByClassName("atom-button-optionlocation__pin-icon")) {
      i.classList.add("mode");
    }
  }
}