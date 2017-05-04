/*
 * Archivo principal de JS
 */
 var navBar = document.getElementById('nav');
 var portfolio = document.getElementsByClassName("link")[0];
 var about = document.getElementsByClassName("link")[1];
 var contact = document.getElementsByClassName("link")[2];
function showBar(){
  var countScroll = document.body.scrollTop;
    if(countScroll>120){
    	navBar.removeAttribute("class", "nav-bar")
 		navBar.setAttribute("class", "nav-modal");
    } else {
    	navBar.removeAttribute("class", "nav-modal")
 		navBar.setAttribute("class", "nav-bar");
    }
    if(countScroll >= 780 && countScroll<1512.9){
    	portfolio.setAttribute("class", "padding");
    } else{
    	portfolio.removeAttribute("class", "padding")
    }
    if (countScroll >= 1512.9 && countScroll<1848.9) {
    	about.setAttribute("class", "padding");
    } else {
    	about.removeAttribute("class", "padding")
    }
     if (countScroll >= 1848.9 && countScroll<2440.8) {
    	contact.setAttribute("class", "padding");
    } else {
    	contact.removeAttribute("class", "padding")
    }
    console.log(document.body.scrollTop);
}


 document.addEventListener("scroll", showBar);