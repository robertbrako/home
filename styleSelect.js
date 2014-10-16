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
  
  if (w >= 0 && w <= 480) {
    document.getElementsByTagName("link").disabled=false;
  }
  else if (w > 480 && w <= 800) {
        return; // for now
  }
  else if (w > 800) {
        for (var i=0; i <= document.getElementsByTagName("link").length; i++) {
            a = document.getElementsByTagName("link");
          //  if (a.getAttribute("rel").indexOf("style") != -1) {
                a.disabled=true;
          //  }
        }
  }
  // Q: does window.outerWidth ever return less than 0?
}

function changeStyle (newStyle) {
//  if desktop (nice one like mine) { }
//  else if mobile { }
//  else default () { }
}
