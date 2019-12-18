//Responsive Navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Copyright Date Function
document.getElementById("year").innerHTML = new Date().getFullYear();

//Hide Designs on Mobile
function myDesigns() {
  var div = document.getElementById("myDesigns");
  if (div.style.display != "block") {
    div.style.display = "block"
  } else {
    div.style.display = "none"
  }

}

//Hide Writing on Mobile
function myWriting() {
  var div = document.getElementById("myWriting");
  if (div.style.display != "block") {
    div.style.display = "block"
  } else {
    div.style.display = "none"
  }

}

//Meetup case study scroll bar (originally from w3 schools)
window.onscroll = function() {myScrollBar()};

function myScrollBar() {
 var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
 var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
 document.getElementById("myBar").style.width = scrolled + "%";
}

//Change background color of Northern Lights img.
function myPicture() { 
    var e = document.getElementById("demo");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
    document.getElementById("demo").style.background = "#000";
} else{
    document.getElementById("demo").style.background = "#FFF";
}
}
