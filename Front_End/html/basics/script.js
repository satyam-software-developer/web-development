// var innerDiv = document.getElementById('inner');

// innerDiv.addEventListener('click', function(event){
//   console.log('Click Inner Div');
//   event.stopPropagation();
// });



// var outerDiv=document.getElementById('outer');

// outerDiv.addEventListener('click',function(){
//   console.log('Click Outer Div');
// });


// document.addEventListener('click',function(){
//   console.log('Click Document');
// });




var box =document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;
box.addEventListener('click', function(){
 "use strict";
 count++;
 var demo=100;
 console.log(count);
 clickCount.innerText = count + " ";

});