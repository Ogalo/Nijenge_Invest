const toggleSignUp= document.getElementById("butt1")
const toggleSignUp2 = document.getElementById("butt2")
const signUpPage = document.getElementById("signUp")
const mainPage = document.getElementsByClassName("mainPage")
const toggleSignIn = document.getElementById("signIn")
const signInPage = document.getElementById("logInPage")
const closeTab = document.querySelector(".closeBtn")
const closeTab1 = document.querySelector(".closeBtn1")
const closeTab2 = document.querySelector(".closeBtn2")
const EntreButt = document.getElementById("entreBtn")
const entrePage = document.getElementById("entrePage")

toggleSignUp.addEventListener("click", (e) =>{
  e.preventDefault();
  if(signUpPage.style.display === "none"){
    
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

  }
})

toggleSignUp2.addEventListener("click", () =>{
  
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

toggleSignIn.addEventListener("click", () =>{
  ;
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

EntreButt.addEventListener("click", () =>{
  
  if(entrePage.style.display === "none"){
    
    entrePage.style.display = "block";
    
  }else{
    
    entrePage.style.display = "none";
    

  }
})

closeTab2.addEventListener ("click", () => {
  if(closeTab.parentElement.style.display === "none"){
    closeTab2.parentElement.style.display = "block";
    entrePage.style.display = "none";
  }else{
    closeTab2.parentElement.style.display = "none";
    mainPage.style.display = "none"
  }
  
  
})
