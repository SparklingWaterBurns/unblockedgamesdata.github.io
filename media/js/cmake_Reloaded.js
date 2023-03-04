//cmake_Reloaded.js
//document.cookie = "firstReloads="
function checkFirstVisit() {
  if(document.cookie.indexOf('firstReload')==-1) {
    // The cookie doesn't exist. Create it now
    document.cookie = 'firstReload=1';
  }
  else {
    // Not the first visit, so alert
    console.log("TODO:Req sql server")
  }
}