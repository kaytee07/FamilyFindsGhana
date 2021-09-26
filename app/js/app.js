const $hamburger = document.querySelector(".header__hamburger");
const $cover = document.querySelector(".cover");
const $headerOptions = document.querySelector(".header__options");
const $body = document.querySelector("body");
const $logo = document.querySelector(".header__nav__logo")
const $location = document.querySelector(".locations");

$hamburger.addEventListener('click',()=>{
    if($hamburger.classList.contains("close")){  
        $hamburger.classList.remove("close");
         $cover.classList.remove("overlay");
         $headerOptions.classList.remove("open-menu");
          $body.classList.remove("hidden");
    }else{
         $hamburger.classList.add("close");
         $cover.classList.add("overlay");
         $headerOptions.classList.add("open-menu");
         $body.classList.add("hidden")
       //   $headerOptions.classList.add("fade-in");
         
    }
})

$logo.addEventListener("click", ()=>{
    window.location.href = 'index.html'
})

$location.addEventListener("click", () => {

  this.location.href = "locations.html";
});

