// Add Default local storage Class on body
document.body.classList.add(localStorage.getItem('pageColor') || 'red');

var elements = document.querySelectorAll('.color-switcher li'),
    classesList = [];

  //Loop On Elements

for(var i = 0; i < elements.length; i++){

  //Get Classes List
  classesList.push(elements[i].getAttribute('data-color'));

  elements[i].addEventListener("click",function(){

    // Remove All Old Classes 
    document.body.classList.remove(...classesList);

    // Add Current Classes From li Data Attribute
    document.body.classList.add(this.getAttribute("data-color"));

    // Add Data to Local Storage
    localStorage.setItem('pageColor', this.getAttribute("data-color"));
    




  },false
  );


}  
