

function clearScreen(){
  document.getElementById("screen").value = " ";
}
function display(val){
  document.getElementById("screen").value +=val;
}

function calculate(){
  var p = document.getElementById("screen").value;
  var q = eval(p);
  document.getElementById("screen").value = q;
}
function del(){
  var i = document.getElementById("screen").value;
  var  b = i.slice(0,length-1);
  document.getElementById("screen").value = b ;
}
