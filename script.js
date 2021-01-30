var box = document.getElementById("box");
var height = 100;
var width = 100;

function small() {
  width = width/2
  height = height/2
  box.style.height = height + "px"; 
  box.style.width = width + "px";
}

function big() {
  width = width*2
  height = height*2
  box.style.height = height + "px";
  box.style.width = width + "px";
}