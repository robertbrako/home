/* so, this finally works. time to return to planning

function init(code) {
 if (code == "1") {
  if (window.innerWidth >= 1000) {   // rough idea: if wide screen, show more
   var bigblock = "";
   var append = "01010101<br>";
   for (var i = 0; i < window.innerHeight; i++) {
    bigblock += append;
   } 
   document.getElementById("recht").innerHTML = bigblock;
}
 }
 else {
  alert("ok-ish");
 }
}

window.onload = init("1");
// window.onresize = init("2");
*/
