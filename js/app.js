/*
 * Archivo principal de JS
 */
 var navBar = document.getElementById('nav');
 var portfolio = document.getElementsByClassName("link")[0];
 var about = document.getElementsByClassName("link")[1];
 var contact = document.getElementsByClassName("link")[2];
 var imgPortfolio = document.getElementsByClassName("images");
 var modal =document.getElementById("modal");
 var img = document.getElementById("imagen");
 var x=document.getElementById("x");
 var inputData=document.getElementsByClassName("placeholder");
 var labelInfo=document.getElementsByClassName("label-hidden");


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
}
function imgPrev(){
   img.src=this.src;
   modal.style.display = "block";
   console.log(this)
}
function cerrar(){
    modal.style.display="none";
}
function showLabel(){
    alert("a")
}
for(var i=0; i<imgPortfolio.length;i++){
    imgPortfolio[i].addEventListener("click", imgPrev);
}
for(var i=0; i<inputData; i++){
    inputData[i].addEventListener("keypress", showLabel);
}
 document.addEventListener("scroll", showBar);
 x.addEventListener("click", cerrar);
