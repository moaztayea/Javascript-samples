function capitalizeLetters(string){

  var oldArray = string.split(' '),
  newArray = [];



  for(var i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
  }

  return newArray.join(' ');
}

console.log(capitalizeLetters('moaz yasser tayea'));



// function filterArray(arr){

//   var arr = [],
//   newArr = [];

//   for(var i = 0; i< arr.length;i++){
//     if(arr[i].isInteger){
//       newArr.push(arr[i]);
//     }
//   }
// return newArr;



// }

// var moaz = [2,5,3,"ali","ahmed"];



// console.log(filterArray(moaz));