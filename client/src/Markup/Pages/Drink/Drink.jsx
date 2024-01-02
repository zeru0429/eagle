import React from 'react'
import imgburger from '../../../assets/images/burger.jpeg'
import imgpizza from '../../../assets/images/pizza.jpeg'
import imgspagertii from '../../../assets/images/spageti.jpeg'
import '../Drink/drink.css'
import Avatar from '@mui/material/Avatar';
import Drinkcomp from '../../Components/Drink/Drinkcomp'
const Drink = () => {
  return (
    <>
    <div class="row row-padded drinkPage">
        <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
                <h3 class="fh5co-drinks">Drinks</h3>
                <ul type="none">
                  

                    <Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    />
                    <Drinkcomp 
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
                   <Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><Drinkcomp 
                    resimg={imgburger}
                    name="Pineapple Juice"
                    description="Far far away, behind the word mountains."
                    price="200 Birr"
                    
                    /><Drinkcomp 
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

export default Drink
