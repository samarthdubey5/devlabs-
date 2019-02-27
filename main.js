window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-left").style.padding = "1% 1%";
    document.getElementById("navbar-right").style.padding = "1% 1%";
    document.getElementById("navbar-left").style.width = "17%";
    document.getElementById("navbar-right").style.top = "0%";
    document.getElementById("navbar-right").style.backgroundColor = "#26476c";
  
    //document.getElementById("logo").style.fontSize = "25px";
  } else {

   
    document.getElementById("navbar-left").style.padding = "30px 10px";
    document.getElementById("navbar-right").style.padding = "10px 10px";
    document.getElementById("navbar-left").style.width = "15%";
    document.getElementById("navbar-right").style.top = "3%";
    document.getElementById("navbar-right").style.backgroundColor = "rgba(38, 71, 108,0.4)";
    
    //document.getElementById("logo").style.fontSize = "35px";
  }
}
//responsive navbar
function myFunction() {
    var x = document.getElementById("navbar-right");
    if (x.className === "navbar-right") {
      x.className += " responsive";
    } else {
      x.className = "navbar-right";
    }
  }