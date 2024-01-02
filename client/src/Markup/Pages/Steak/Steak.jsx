import React from 'react'
import imgburger from '../../../assets/images/burger.jpeg'
import SteakComp from '../../Components/SteakComp/SteakComp'
const Steak = () => {
  return (
 <>
    <div class="row row-padded drinkPage">
        <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
                <h3 class="fh5co-drinks">Steak</h3>
                <ul type="none">
                  

                    <SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                </ul>
            </div>
        </div>
        <div class="col-md-6 mt-5">
            <div class="fh5co-food-menu to-animate-2">
                <ul>
                   <SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><SteakComp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                </ul>
            </div>
        </div>
       
       
    </div>
       </>
  )
}

export default Steak
