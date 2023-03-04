// TODO: check if the browser is offline. If it is, Change the stickyerr div's innerhtml to an error
//Check for IE, then redirect
//Check for Safari, then show warning
//var StickyNotice = document.getElementById('stickynotice');
if (window.document.documentMode) {
  document.body.innerHTML="<body><h3>IE not supported</h3></body>";
}
function removeClassName() {
    document.getElementById('stickynotice').className="";
}
var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    console.log("User is using chromium browser"); // Chrome/Edge/Opera
  } else {
    console.log("User on safari"); // Safari
    document.getElementById('stickynotice').innerHTML="You are using Safari. You may encounter errors.";
    document.getElementById('stickynotice').className="stickyerr";
  }
}
if (window.navigator.onLine==false) {
   document.getElementById('stickynotice').innerHTML="You are offline. Functionality is unavailable.";
   document.getElementById('stickynotice').className="stickyerr";
}
if (window.navigator.onLine==true) {
   document.getElementById('stickynotice').innerHTML="Found the internet!";
   document.getElementById('stickynotice').className="stickynews";
   setTimeout(removeClassName,1000);
}