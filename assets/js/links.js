
// change main navigation links

window.onload = function () {
    var currentURL = window.location.href;

    if (currentURL != "https://www.ovi.lv") {
      document.getElementById("homeLink").href = "/";
      document.getElementById("serviceLink").href = "#top"; //change this
      document.getElementById("contactLink").href = "/contacts.html";
    }
  }