import React, { useState } from 'react'
import { useStateValue } from "../../../Contexts/stateprovider";
const SingleProduct = (props) => {
	const [{ basket }, dispatch] = useStateValue();

	const [isAdded, setIsAdded]=useState(false)
	const handleClick=()=>{
		if(isAdded){
			removeFromBasket();
		}
		else{
			addToBasket();
		}
		setIsAdded(!isAdded)
	}



	const removeFromBasket = () => {
		dispatch({
		  type: "REMOVE_FROM_BASKET",
		  id: id,
		});
	 };


	const addToBasket = () => {
		dispatch({
		  type: "ADD_TO_BASKET",
		  item: {
			 id: id,
			 title: title,
			 image: image,
			 price: price,
			 rating: rating,
		  },
		});
	 };
  




  return (
    <>
      <li>
			<div class="fh5co-food-desc">
				<figure>
					<img src={props.resimg} class="img-responsive" />
				</figure>
				<div>
					<h3>{props.name}</h3>
					<p>{props.description}</p>
				</div>
			</div>
			<div class="fh5co-food-pricing">
				{props.price}
			</div>
			<div>
				{ !isAdded ?
					<button type='submit' class="addButten text-light" onClick={handleClick}>Add</button> :
				<button type='submit' class="addButten ms-2 text-light bg-danger" onClick={handleClick}>Remove</button>}
			</div>
		</li>

    </>
  )
}

export default SingleProduct
