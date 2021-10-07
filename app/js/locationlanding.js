import { Product } from "./product.js";

const LocationLanding = (()=>{
   const $category = document.querySelectorAll(".category"); ;
   const $productPageCategory =  document.querySelectorAll(".product__page__category");

    const init = () =>{
       render()
       $category.forEach(map=>console.log(map.nextElementSibling))
    }

    const listeners = () =>{

    }

    const render = () => {
        
         $category.forEach((elem) => {
              let markUp = "";
              console.log(markUp)
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