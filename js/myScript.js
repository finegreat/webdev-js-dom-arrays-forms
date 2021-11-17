// alert("hello, and welcome to my first js experience :)");
// console.info("hello from the console!");
// console.dir(document);

(function () {
  //start code
  document.getElementById("myHeading").innerHTML = "Lewis J";
  document.querySelector("nav ul li").setAttribute("class", "currentPage");
  //document.querySelector("nav ul li a").setAttribute("href", "https://www.google.com") allows changing of landing page of links (beware! can be used to hack)

  // document.getElementById("myTestEvent").onclick = function () {
  //   console.info("hello :)");
  // };

  document.getElementById("myTestEvent").addEventListener("click", myFunction);
  function myFunction(ev) {
    console.info(ev.target);
    ev.target.innerHTML = "I was clicked!";
  }

  // document.querySelector(".red").addEventListener("click", function () {
  //   document.body.style.backgroundColor = "red";
  // });

  // document.querySelector(".green").addEventListener("click", function () {
  //   document.body.style.backgroundColor = "green";
  // });

  // document.querySelector(".blue").addEventListener("click", function () {
  //   document.body.style.backgroundColor = "blue";
  // });

  // document.querySelector(".reset").addEventListener("click", function () {
  //   document.body.style.backgroundColor = "white";
  // });

  document.querySelector("nav ul li").setAttribute("class", "currentPage");

  var colourButtons = document.querySelectorAll(".colPicker");

  console.dir(colourButtons);

  for (var i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", chgColour);
  }

  function chgColour(ev) {
    var colourPicked = ev.target.classlist[0] + "Back";
    var bodyElement = document.querySelector("body");
    if (colourPicked == "resetBack") {
      bodyElement.removeAttribute("class");
    } else {
      bodyElement.setAttribute("class", colourPicked);
    }
  }

  //end code
})();
