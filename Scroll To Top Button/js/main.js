var myBtn = document.getElementById('goUp');
window.onscroll = function(){
  'use strict';
  if(window.pageYOffset >= 400){
    myBtn.style.display = 'block';
  }else{
    myBtn.style.display = 'none';
  }
};

myBtn.onclick = function(){
  'use strict';
  window.scrollTo(0,0);
};