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
const register = document.getElementById("registerbtn")
const proposal = document.getElementById("propbtn")
const urlApi = 'https://git.heroku.com/nijenge-invest.git'


signUpPage.addEventListener('submit', (e) => { 
     e.preventDefault(); 
  
     const newUser = {username: , password: ,confirmePassword:}; 
  
     fetch(urlApi, { 
         method: "POST", 
         headers: { 
             'Content-Type': 'application/json', 
         }, 
         body: JSON.stringify(newUser) 
     }) 
     .then(response => response.json()) 
     .then(data => console.log('Success:', data)) 
     .catch(error => console.log(error)) 
  
     alert("Welcome" + " " + userName.value) 
     // window.location = "../../index.html" 
     document.getElementById("userInputName").innerHTML = userName.value; 
     const signUp = document.getElementById("register"); 
     signUp.style.display = "none"; 
  
 })

proposal.addEventListener("click", () => {
  entrePage.style.display = "none";
 
})



document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
});

toggleSignUp.addEventListener("click", () =>{
  
  if(signUpPage.style.display === "none"){
    
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

  }
})

closeTab.addEventListener ("click", () => {
 
 signUpPage.style.display = "none"
  
})






toggleSignUp2.addEventListener("click", () =>{
  
  if(signUpPage.style.display === "none"){
    signInPage.style.display = "none";
    signUpPage.style.display = "block";
    
  }else{
    
    signUpPage.style.display = "none";
    

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
 
    signInPage.style.display = "none";
    
})

const aboutLink = document.getElementById('aboutLink')
const aboutPage = document.getElementById('about')
const closeTab5 = document.querySelector(".closeBtn5")


aboutLink.addEventListener("click", () =>{
  
  if(aboutPage.style.display === "none"){
    
    aboutPage.style.display = "block";
  
  }else{
    
    aboutPage.style.display = "none";
    

  }
})



closeTab5.addEventListener ("click", () => {
 
 aboutPage.style.display = "none"
  
})


EntreButt.addEventListener("click", () =>{
  
  if(entrePage.style.display === "none"){
    
    entrePage.style.display = "block";
  
  }else{
    
    entrePage.style.display = "none";
    

  }
})



closeTab2.addEventListener ("click", () => {
 
 entrePage.style.display = "none"
  
})



investBtn.addEventListener("click", () =>{
  
  if(investPage.style.display === "none"){
    
    investPage.style.display = "block";
    
  }else{
    
    investPage.style.display = "none";
    

  }
})

closeTab3.addEventListener ("click", () => {
  
    investPage.style.display = "none";
    
})


let share = document.getElementById('shares').value
let forecast = document.getElementById('forcast').value
let busina = document.getElementById('busina').value


console.log(share);
console.log(forecast);
console.log(busina);
let venture = document.getElementById('venture')
let cost = document.getElementById('cost')
let divident = document.getElementById('divident')

proposal.addEventListener("submit", () => {
  venture.append(`${busina}`)
  cost.append(`${forecast}`)
  divident.append(`${share}`)
})

