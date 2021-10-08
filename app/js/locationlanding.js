import { Product } from "./product.js";

const LocationLanding = (()=>{
   const $category = document.querySelectorAll(".category"); ;
   const $productPageCategory =  document.querySelectorAll(".product__page__product");
   const $describtionModal = document.querySelector(".describtion__modal");
   const $body = document.querySelector("body");
    const $overlay = document.querySelector(".overlay2");
  

    const init = () =>{
       render()
       listeners ()
      
    }

    const listeners = () =>{
     const $card = $productPageCategory
     $card.forEach((elem)=>{
        elem.childNodes[1].addEventListener("click",(e)=>{
            if(e.target.classList.value === "card-btn btn"){
                 $describtionModal.classList.add("show");
                 $body.classList.add("hidden");
                 $overlay.classList.add("show");
                 showModal(e.target)
            }
        })

        
     })

        $describtionModal.addEventListener("click", (e) => {
          if (e.target.classList.value === "fad fa-times-hexagon") {
            $describtionModal.classList.remove("show");
            $body.classList.remove("hidden");
            $overlay.classList.remove("show");
          }


        });

     
    }

     const showModal = (elem) => {
       let markup = "";

       markup += `
                   <div class="describtion__modal__card">
            <div class="describtion__modal__card__header">
                <div class="describtion__modal__card__header-img">
                       <img src="${
                         elem.parentElement.previousElementSibling
                           .firstElementChild.src
                       }" alt="">   
                </div>
                <div class="describtion__modal__card__headers-other-details">
                    <div class="close-icon">
                        <i class="fad fa-times-hexagon"></i>
                    </div>
                    <div class="describtion__modal__card__headers-other-details">
                       <h4 >${
                         elem.parentElement.firstElementChild.innerHTML
                       }</h4>
                        <p>
                          ${Product.map((about) =>
                            elem.parentElement.firstElementChild.innerHTML ==
                            about.name
                              ? about.about
                              : ""
                          )}
                        </p>
                        <button class="button">Get Location</button>
                    </div>
                </div>
            </div>  
        </div>

        
            `;
      
       $describtionModal.innerHTML = markup;
      
     };


    const render = () => {
        
         $category.forEach((elem) => {
              let markUp = "";
              Product.forEach((item) => {
                   if(elem.firstElementChild.textContent === item.Category){
                       markUp += `
                        <div class="product__page__product__cards card">
                    
                        <div class="cards__image">
                            <img src="${item.img}" alt="" class="src">
                        </div>
                        <div class="cards__Info">
                            <h3 class="name">${item.name}</h3>
                            <h3 class="location">${item.Location}</h3>
                            <button class="card-btn btn">Read More</button>
                        </div>               
                    </div>
                      `;
                      
                   }; 
                   elem.nextElementSibling.innerHTML= markUp
              });
          
         });
       
          
        
    }

    return{
        init
    }

})()

export default LocationLanding