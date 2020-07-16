var myText = 'hello from moaz web school this is type writer effects on text',
i=0,
myBtn = document.getElementById('button');

myBtn.onclick = function(){

  'use strict';
  var typeWriter= setInterval(function(){
    document.getElementById('type').textContent+=myText[i];
    i++;
    if(i>myText.length-1){
      clearInterval(typeWriter);
    }

  },100);
};