/** 
script to select appropriate stylesheet

ISSUE: should this be addressed with PHP?  Probably...

-ok, this is off-base, but MPR is doing a piece on pseudofolliculitis barbae,
and I MUST take notes on it.  Hopefully my face can be smooth once again...

notes:
Shaving product: Bevel by Walker & Co. shaving system - good for anyone, it seems
(nair... depillatory cream => don't use!)

**/

/** Add the following to index.html:
 * <link rel="stylesheet" type="text/css" href="narrowStyle.css" title="narrowStyle"/>
 * <link rel="stylesheet" type="text/css" href="medStyle.css" title="medStyle"/>
 * <link rel="stylesheet" type="text/css" href="wideStyle.css" title="wideStyle"/>
 * consider making a separete css folder
**/
/** Get browser width robust function:
 *function getBrowserWidth() {
    if (window.innerWidth) { return window.innerWidth;}
    else if (document.documentElement && document.documentElement.clientWidth != 0) {
      return document.documentElement.clientWidth; }
    else if (document.body) { return document.body.clientWidth;}
    return 0;
  }
**/
function monitorResizeTest() { // platform-dependent
  // if window.width is between [0,400], [400,800], [800,9999] { use different styleSheet; }
  if (window.outerWidth <= 480) {
    if (window.outerWidth >= 0)
      // document.getElementsByTagName("link").disabled=false;
  }
  else {
    if (window.outerWidth <= 800)
      document.getElementsByTagName("link").disabled=true; // test: disable stylesheet for medium size
    else
      return; // for now
  }
  // is window.outerWidth ever -1, or less than 0 generally?
}

function changeStyle (newStyle) {
//  if desktop (nice one like mine) { }
//  else if mobile { }
//  else default () { }
}
