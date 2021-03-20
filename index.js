
//responsive navbar 

document.querySelector("#nav-icon")
.addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("ul").classList.toggle("show-menu");
  });


//Copyright Date Function
document.getElementById("year").innerHTML = new Date().getFullYear();


//Growing line div 

(function() {
  let elements;
  let windowHeight;

  function init() {
    elements = document.getElementsByClassName('line');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let line = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - (windowHeight - 20) <= 0) {
       
        line.classList.add('line-grow');
       
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();


