const $hamburger = document.querySelector(".header__hamburger");
const $cover = document.querySelector(".cover");
const $headerOptions = document.querySelector(".header__options");
const $body = document.querySelector("body");
const $logo = document.querySelector(".header__nav__logo")
const $location = document.querySelectorAll(".location");
const $more = document.querySelectorAll(".more");
const $explore = document.querySelectorAll(".explorer");
const $tour = document.querySelectorAll(".tours");
const $closeicon = document.querySelector(".close-icon");
const $cardBtn = document.querySelectorAll(".card-btn");
const $describtionModal = document.querySelector(".describtion__modal");
const $overlay = document.querySelector(".overlay2");




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



// $more.addEventListener("click", () => {
//   this.location.href = "locations.html";
// });
$more.forEach((more) => {
  more.addEventListener("click", () => {
    this.location.href = "locations.html";
  });
});
 

$location.forEach((locate)=>{
 locate.addEventListener("click", ()=>{
   this.location.href = "locations.html";
 })
})

$explore.forEach((explore) => {
  explore.addEventListener("click", () => {
    this.location.href = "locations.html";
  }); 
});

$tour.forEach((tour) => {
  tour.addEventListener("click", () => {
    this.location.href = "locations.html";
  });
});

// $tour.addEventListener("click", () => {
//   this.location.href = "locations.html";
// });

$cardBtn.forEach((card)=>{
  card.addEventListener("click", function(){
    $describtionModal.classList.add("show")
     $body.classList.add("hidden");
      $overlay.classList.add("show");
     
  })
})  

$closeicon.addEventListener("click", ()=>{
  $describtionModal.classList.remove("show");
  $body.classList.remove("hidden");
   $overlay.classList.remove("show");
})


