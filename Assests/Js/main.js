const toggleSign = document.getElementById("butt1")
const signUpPage = document.getElementById("signUp")
const mainPage = document.getElementsByClassName("mainPage")

const closeTab = document.querySelector(".closeBtn")


toggleSign.addEventListener("click", (e) =>{
  e.preventDefault();
  if(signUpPage.style.display === "none"){
    
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

  }
})

closeTab.addEventListener ("click", () => {
  if(closeTab.parentElement.style.display === "none"){
    closeTab.parentElement.style.display = "block";
  }else{
    closeTab.parentElement.style.display = "none";
    mainPage.style.display = "none"
  }
  
  
})