const buttSign = document.querySelectorAll("button")
const signUpPage = document.querySelectorAll(".page")


function loadSignUp (e){
  e.preventDefault();
  
  if (buttSign.click == true) {
      signUpPage.style.display = "block"
  } else {
      signUpPage.style.display = "none"
  }
  
  
}

buttSign.addEventListener("click", loadSignUp);


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

const links = document.querySelectorAll('');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');

let selectedPageBtn = "";
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let i = 0; i < pages.length; i++){
            pages[i].style.display = "none";
        }
        pages[i].style.display = "block";
        selectedPageBtn = i;
        document.querySelector('header').style.filter = "blur(2px)";
    });
}

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener('click', function(){
        allBtns[i].parentElement.style.display = "none";
        document.querySelector('header').style.filter = "blur(0px)";
    });
}