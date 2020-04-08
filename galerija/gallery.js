var komentarai = {
    "0": {
      "name": "Jonas",
      "comment": '"Super, aciu, labai patiko."'
    },
    "1": {
      "name": "Ona",
      "comment": '"Super, aciu, viskas liuks."'
    },
    "2": {
      "name": "Danute",
      "comment": '"Darbai atlikti negerai."' 
    },
    "3": {
      "name": "Grazina",
      "comment": '"Meistru rankos dygsta is siknos."' 
    },
    "4": {
      "name": "Ovidijus",
      "comment": '"Gal ir nieko."' 
    },
    "5": {
      "name": "Liudas",
      "comment": '"is 10 duodu 6."' 
    }
  };
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    var name = document.getElementById("name");
    var comment = document.getElementById("comment");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
      name.innerHTML = komentarai[slideIndex-1].name;
      comment.innerHTML = komentarai[slideIndex-1].comment;
  }