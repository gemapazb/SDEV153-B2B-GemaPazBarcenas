let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  
  // Increment the slide index and reset if necessary
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';
  
  // Call the function again after 2 seconds
  setTimeout(showSlides, 2000); // Change the time interval as needed
}

// Show the slides when the page loads
window.onload = showSlides;
     