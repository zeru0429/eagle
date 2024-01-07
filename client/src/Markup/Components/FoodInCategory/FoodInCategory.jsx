import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import SingleFood from './SingleFood';


const FoodInCategory = (props) => {


  
    return (
       <div class="row row-padded drinkPage">
        <div class="col-md-5">
            <div class="fh5co-food-menu to-animate-2">
                <h3 class="fh5co-drinks">{props.title}</h3>
                <ul type="none">
                {props.foods && props.foods.map((singleProduct)=>{
                return <li class="Drink" key={singleProduct.foodId}>              
                        <SingleFood
                            foodName={singleProduct.foodName}
                            imageUrl={singleProduct.imageUrl}
                            amharicName ={singleProduct.amharicName}
                            price ={singleProduct.price}
                        />
                      </li>
                  })}
                </ul>
            </div>
        </div>
       
       
    </div>  
    )
  }

export default FoodInCategory