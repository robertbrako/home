/** 
script to select appropriate stylesheet

ISSUE: should this be addressed with PHP?  

**/

 function getBrowserWidth() {
    if (window.innerWidth) { return window.innerWidth;}
    else if (document.documentElement && document.documentElement.clientWidth != 0) {
      return document.documentElement.clientWidth; }
    else if (document.body) { return document.body.clientWidth;}
    return 0;
  }
  
function monitorResizeTest() {
  var a;
  var w = getBrowserWidth();
  
  if (w >= 0 && w <= 1024) { // change max w to around 480 when ready
        for (var i=0; i < document.getElementsByTagName("link").length; i++) {
            a = document.getElementsByTagName("link")[i];
            if (a.getAttribute("rel").indexOf("style") != -1) {
             if (a.getAttribute("href") == "stylesheet.css") {
               a.disabled = false;
             }
             else {
              a.disabled = true;
             }
            }
        }
  }
  /** Ignore following until 3 sheets are utilized:
  else if (w > 480 && w <= 800) {
        return; // for now
  }
  **/
  else if (w > 1024) { // as it happens, old stylesheet is pretty good up to 1024
        for (var i=0; i < document.getElementsByTagName("link").length; i++) {
            a = document.getElementsByTagName("link")[i];
            if (a.getAttribute("rel").indexOf("style") != -1) {
             if (a.getAttribute("href") == "wideStyle.css") {
               a.disabled = false;
             }
             else {
              a.disabled = true;
             }
            }
        }
  }
  // Q: does window.outerWidth ever return less than 0?
}

function changeStyle (newStyle) {
//  if desktop (nice one like mine) { }
//  else if mobile { }
//  else default () { }
}
