const slides = document.getElementsByClassName("slide");  
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000);
  }

  prevButton.addEventListener("click", function() {
    if (slideIndex === 1) {
      slideIndex = slides.length; 
    } else {
      slideIndex -= 2;
    }
    showSlides();
  });

  nextButton.addEventListener("click", function() {
    showSlides();
  });
});
