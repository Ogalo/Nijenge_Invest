const toggleSignUp= document.getElementById("butt1")
const toggleSignUp2 = document.getElementById("butt2")
const signUpPage = document.getElementById("signUp")
const mainPage = document.getElementsByClassName("mainPage")
const toggleSignIn = document.getElementById("signIn")
const signInPage = document.getElementById("logInPage")
const closeTab = document.querySelector(".closeBtn")
const closeTab1 = document.querySelector(".closeBtn1")


toggleSignUp.addEventListener("click", (e) =>{
  e.preventDefault();
  if(signUpPage.style.display === "none"){
    
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

  }
})

toggleSignUp2.addEventListener("click", (e) =>{
  e.preventDefault();
  if(signUpPage.style.display === "none"){
    signInPage.style.display = "none";
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

  }
})

closeTab.addEventListener ("click", () => {
  if(closeTab.parentElement.style.display === "none"){
    closeTab.parentElement.style.display = "block";
    signUpPage.style.display = "none";
  }else{
    closeTab.parentElement.style.display = "none";
    mainPage.style.display = "none"
  }
  
  
})

toggleSignIn.addEventListener("click", (e) =>{
  e.preventDefault();
  if(signInPage.style.display === "none"){
    
    signInPage.style.display = "block";
    signUpPage.style.display = "none";
    
  }else{
    
    signInPage.style.display = "none";
    

  }
})

closeTab1.addEventListener ("click", () => {
  if(closeTab1.parentElement.style.display === "none"){
    closeTab1.parentElement.style.display = "block";
    signInPage.style.display = "none";
  }else{
    closeTab1.parentElement.style.display = "none";
    mainPage.style.display = "none";
  }
  
})