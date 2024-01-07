import React, { useEffect, useState } from 'react'
import res2 from '../../../assets/images/pizza.jpeg'
import res3 from '../../../assets/images/spageti.jpeg'
import res1 from '../../../assets/images/burger.jpeg'

import axios from '../../../util/axios'
import '../Menu/Menu.css'
import SingleProduct from '../../Components/single product/SingleProduct'


const Menu = () => {

	const [category,setCategory] = useState([]);
	const [food,setFood] = useState([]);

	useEffect(()=>{
		const fetchData = async () =>{
			const response = await 	axios.get('api/food');
			setFood(response.data.data);
			const response2 = await 	axios.get('/api/catagory');
			setCategory(response2.data.data)
		}
		fetchData();
	},[]);

// console.log(food);
// console.log(category);
  return (
    <>
      <div id="fh5co-menus" data-section="menu" class="menuP">
			<div class="container">
	
				<div class="row  fh5co-heading FoodMenu text-center">
					<div>
						<p class="fs-2 text-dark">Food Menu</p>
						<p>Far far away, behind the word mountains, far from <br />the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row row-padded">
					<div class="col-md-6">
						<div class="fh5co-food-menu to-animate-2">
							<h2 class="fh5co-drinks">Drinks</h2>
							<ul>


								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
											
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="fh5co-food-menu to-animate-2">
							<h2 class="fh5co-dishes">Steak</h2>
							<ul>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="fh5co-food-menu to-animate-2">
							<h2 class="fh5co-drinks">Drinks</h2>
							<ul>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="fh5co-food-menu to-animate-2">
							<h2 class="fh5co-dishes">Steak</h2>
							<ul>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
								<SingleProduct 
								  resimg={res1}
								  name="burger"
								  description="Far far away, behind the word mountains."
								  price="200"
								/>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-4 text-center to-animate-2">
						<p><a href="#" class="btn btn-primary btn-outline">More Food Menu</a></p>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Menu
