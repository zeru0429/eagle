import React, { useState } from 'react'

const SingleProduct = (props) => {

	const [isAdded, setIsAdded]=useState(false)
	const handleClick=()=>{
		setIsAdded(!isAdded)
	}
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
