import { Product } from "./product.js";

const Modal = (_=>{
    

    const init = _ =>{

    }

    const render= _ => {
      let markup = "";
       $describtionModal += `
         <div class="describtion__modal__card">
            <div class="describtion__modal__card__header">
                <div class="describtion__modal__card__header-img">
                    <img src="/img/food-img-4.jpg" alt="">
                  
                   
                </div>
                <div class="describtion__modal__card__headers-other-details">
                    <div class="close-icon">
                        <i class="fad fa-times-hexagon"></i>
                    </div>
                    <div class="describtion__modal__card__headers-other-details">
                       <h4 > Caesar's Royal restaurant</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <button class="button">Get Location</button>
                    </div>
                </div>
            </div>  
        </div>
       `;
    }

    return {
        init
    }
})()

export default Modal;