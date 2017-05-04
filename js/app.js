/*
 * Archivo principal de JS
 */
 var navBar = document.getElementById('nav');

function showBar(){
  var countScroll = document.body.scrollTop;
    if(countScroll>120){
    	navBar.removeAttribute("class", "nav-bar")
 		navBar.setAttribute("class", "nav-modal");
    } else {
    	navBar.removeAttribute("class", "nav-modal")
 		navBar.setAttribute("class", "nav-bar");
    }
}
 document.addEventListener("scroll", showBar);