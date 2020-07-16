var myInput = document.getElementById('my-input');

myInput.onfocus = function () {

  // store placeholder Attribute in backup Attribute
  
  this.setAttribute('data-place',this.getAttribute('placeholder'));



  //empty placeholder attribute
  this.setAttribute('placeholder','');


}
myInput.onblur = function () {

  // get placeholder Attribute from backup Attribute
  
  this.setAttribute('placeholder',this.getAttribute('data-place'));



  //empty backup attribute
  this.setAttribute('data-place','');


}