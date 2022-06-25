const toggleSignUp= document.getElementById("butt1")
const toggleSignUp2 = document.getElementById("butt2")
const signUpPage = document.getElementById("signUp")
const mainPage = document.getElementsByClassName("mainPage")
const toggleSignIn = document.getElementById("signIn")
const signInPage = document.getElementById("logInPage")
const closeTab = document.querySelector(".closeBtn")
const closeTab1 = document.querySelector(".closeBtn1")
const closeTab2 = document.querySelector(".closeBtn2")
const closeTab3 = document.querySelector(".closeBtn3")
const EntreButt = document.getElementById("entreBtn")
const entrePage = document.getElementById("entrePage")
const investBtn = document.getElementById("investBtn")
const investPage = document.getElementById("investPage")


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
  if(closeTab2.parentElement.style.display === "none"){
    closeTab2.parentElement.style.display = "block";
    entrePage.style.display = "none";
  }else{
    closeTab2.parentElement.style.display = "none";
    mainPage.style.display = "none"
  }
  
  
})

investBtn.addEventListener("click", () =>{
  
  if(investPage.style.display === "none"){
    
    investPage.style.display = "block";
    
  }else{
    
    investPage.style.display = "none";
    

  }
})

closeTab3.addEventListener ("click", () => {
  if(closeTab3.parentElement.style.display === "none"){
    closeTab3.parentElement.style.display = "block";
    investPage.style.display = "none";
  }else{
    closeTab3.parentElement.style.display = "none";
    mainPage.style.display = "none"
  }
  
  
})

// const ValidatorPizzaClient = require("validator-pizza-node");

// const client = new ValidatorPizzaClient();
// client.validate("domain", "yopmail.com")
//   .then(response => {
//     console.log(response.valid());
//     console.log(response.field("mx")); // Available fields: status, email, domain, mx, disposable, alias, did_you_mean, remaining_requests
//     console.log(response.successful());
//   });