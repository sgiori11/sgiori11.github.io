
//Copyright Date Function
document.getElementById("year").innerHTML = new Date().getFullYear();

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


//Responsive Nav Bar and Nav Icon 
//Must be below the Meetup case study JS because the case study does not have a #nav-icon!
document.querySelector("#nav-icon")
.addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("ul").classList.toggle("show-menu");
  });




let labels = document.getElementsByClassName("tab");

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', selectLabel);
}

function selectLabel() {
  let contentLabel = document.querySelector('label[for="content"]');
  let designLabel = document.querySelector('label[for="designs"]');
  let codeLabel = document.querySelector('label[for="code"]');

  if (this == contentLabel) {
    contentLabel.classList.add('selected-label');
    designLabel.classList.remove('selected-label');
    codeLabel.classList.remove('selected-label');

  }

  else if (this == designLabel) { 
    contentLabel.classList.remove('selected-label');
    designLabel.classList.add('selected-label');
    codeLabel.classList.remove('selected-label');
  }

  else {
    contentLabel.classList.remove('selected-label');
    designLabel.classList.remove('selected-label');
    codeLabel.classList.add('selected-label');
  }
}







































