// const buttSign = document.querySelectorAll("button")
// const signUpPage = document.querySelectorAll(".page")


// function loadSignUp (e){
//   e.preventDefault();
  
//   if (buttSign.click == true) {
//       signUpPage.style.display = "block"
//   } else {
//       signUpPage.style.display = "none"
//   }
  
  
// }

// buttSign.addEventListener("click", loadSignUp);


// let selectedPageBtn = "";

// for (let i = 0; i<pages.length; i++){
//   pages[i].addEventListener("click", function (e){
//     e.preventDefault();
//     for(let i =0; i<pages.length; i++){
//       pages[i].style.display = "none";
//     }
//     pages[i].style.display = "block";
//     selectedPageBtn = i;
    
//   })
// }

const links = document.querySelectorAll('#butt1');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');
console.log(links)

function loadSignUp (e){
  e.preventDefault();
}
  
function regiForm (){
  if (links.click == true) {
    pages.style.display = "block"
  } 
  else {
    pages.style.display = "none"
}

}

links.addEventListener("click", e =>{
  console.log(e.target)
})


  

// links.addEventListener('click', function(event){
//         event.preventDefault();
//         console.log()
        
//        if(pages.style.display == "none"){
//         pages.style.display = "block";
//        }
//        else{
//         pages.style.display = "none";
//        }
        
        
//     });
    

// allBtns.addEventListener('click', function(){
//         return allBtns.parentElement.style.display = "none";
        
//     });
