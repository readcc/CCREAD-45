//Reset From
function resetForm() {
  document.getElementById("form45").reset();
}

//Slide Toggler
function toggleSlider() {
  
  let slider = document.getElementById('slide_panel');
  let button = document.getElementById('slide_button');
  
  slider.classList.toggle('slide');
  button.classList.toggle('slide_button_rotate');
  if (slider.classList.contains('slide') && document.body.scrollWidth < 1024) {
    
    slider.scrollIntoView();
  }
}