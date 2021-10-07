import { Product } from "./product.js";

const Land =(_ =>{

    const $hamburger = document.querySelector(".header__hamburger");
    const $cover = document.querySelector(".cover");
    const $headerOptions = document.querySelector(".header__options");
    const $body = document.querySelector("body");
    const $logo = document.querySelector(".header__nav__logo");
    const $location = document.querySelectorAll(".location");
    const $more = document.querySelectorAll(".more");
    const $explore = document.querySelectorAll(".explorer");
    const $tour = document.querySelectorAll(".tours");
    const $closeicon = document.querySelector(".close-icon");
    const $overlay = document.querySelector(".overlay2");
    const $cards = document.querySelector(".cards");
    const $describtionModal = document.querySelector(".describtion__modal");
     
    
 

    const init = _ =>{
        
        render()
         listeners();
         console.log($closeicon)
           
    }

    const listeners = ()=>{
           
        $hamburger.addEventListener("click", () => {
          if ($hamburger.classList.contains("close")) {
            $hamburger.classList.remove("close");
            $cover.classList.remove("overlay");
            $headerOptions.classList.remove("open-menu");
            $body.classList.remove("hidden");
          } else {
            $hamburger.classList.add("close");
            $cover.classList.add("overlay");
            $headerOptions.classList.add("open-menu");
            $body.classList.add("hidden");
            //   $headerOptions.classList.add("fade-in");
          }
        });

        $logo.addEventListener("click", () => {
          window.location.href = "index.html";
        });

        $more.forEach((more) => {
          more.addEventListener("click", () => {
            window.location.href = "locations.html";
          });
        });

        $location.forEach((locate) => {
          locate.addEventListener("click", () => {
            window.location.href = "locations.html";
          });
        });

        $explore.forEach((explore) => {
          explore.addEventListener("click", () => {
            window.location.href = "locations.html";
          });
        });

        $tour.forEach((tour) => {
          tour.addEventListener("click", () => {
            window.location.href = "locations.html";
          });
        });

         
          
   
     document.querySelectorAll(".card-btn").forEach((card) => {
        
          card.addEventListener("click", function () {
            $describtionModal.classList.add("show");
            $body.classList.add("hidden");
            $overlay.classList.add("show");
            
            
            
            
            let markup = "";

            markup += `
                   <div class="describtion__modal__card">
            <div class="describtion__modal__card__header">
                <div class="describtion__modal__card__header-img">
                       <img src="${
                         card.parentElement.previousElementSibling
                           .firstElementChild.src
                       }" alt="">   
                </div>
                <div class="describtion__modal__card__headers-other-details">
                    <div class="close-icon">
                        <i class="fad fa-times-hexagon"></i>
                    </div>
                    <div class="describtion__modal__card__headers-other-details">
                       <h4 >${
                         card.parentElement.firstElementChild.innerHTML
                       }</h4>
                        <p>
                          ${Product.map(
                            (about) =>
                              card.parentElement.firstElementChild.innerHTML == about.name ? about.about: ''
                          )}
                        </p>
                        <button class="button">Get Location</button>
                    </div>
                </div>
            </div>  
        </div>

        
            `
            // ;
            //                  $closeicon.addEventListener("click", () => {
            //                    $describtionModal.classList.remove("show");
            //                    $body.classList.remove("hidden");
            //                    $overlay.classList.remove("show");
            //                  });
            $describtionModal.innerHTML = markup;
          });
        });

       


    }

    const render = () => {
        let markup = "";
        Product.forEach((location)=>{
            markup += `
                <div class="card cards-for-desktop">
                        <div class="cards__image">
                            <img src="${location.img}" alt="">
                        </div>
                        <div class="cards__info">
                            <p class="name">${location.name}</p>
                            <p class="date">${location.Dates ? location.Dates : location.Location}</p>
                            <button class="card-btn btn">Read More</button>
                        </div>
                    </div>
            `;
        })

        markup += `
             <div class="card last hide-for-desktop">
                        <div class="cards__find-event hide more">
                        <i class="fad fa-long-arrow-right fa-2x"></i>
                        </div>
                    </div>
        `;

      
        $cards.innerHTML = markup;

    }

    return{
        init
    }
    
})()

export default Land;