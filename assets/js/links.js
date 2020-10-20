
// change main navigation links

window.onload = function () {
    var currentURL = window.location.href;

    if (currentURL != "https://alexbuscher09.github.io/ovi-demo/") {
      document.getElementById("homeLink").href = "https://alexbuscher09.github.io/ovi-demo/";
      document.getElementById("serviceLink").href = "#top"; //change this
      document.getElementById("contactLink").href = "https://alexbuscher09.github.io/ovi-demo/contacts.html";
    }
  }
