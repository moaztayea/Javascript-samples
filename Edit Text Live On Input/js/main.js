//  document.querySelector("form #title").onkeyup = function ()
// {
//   document.querySelector("div #titleLive").textContent = this.value;
// }
// document.querySelector("form #content").onkeyup = function ()
// {
//   document.querySelector("div #contentLive").textContent = this.value;
// }


function TextLive(title,titleLive,content,contentLive)
{
  document.getElementById(title).onkeyup = function (){
    document.getElementById(titleLive).textContent = this.value;
  }
  document.getElementById(content).onkeyup = function (){
    document.getElementById(contentLive).textContent = this.value;
  }
};
TextLive('title','titleLive','content','contentLive')