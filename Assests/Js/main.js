const signInOut = document.getElementById("butt1");
const pageLoad = document.getElementsByClassName("page");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
});

signInOut.onclick = function (){
  
  if(signInOut){
  pageLoad.style.display = "block";
  };
}