import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import axios from '../../../util/axios'


const SideBar = () => {
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

console.log(food);
console.log(category);
  return (
    <>
      <div className="sidebar">
      <h2>Food Order</h2>
      
      <ul className="sidebar-menu">
      <li className="sidebar-menu-item "><Link to='/'>All </Link></li>
        {category.length && category.map((singleCategory)=>{
         return  <li className="sidebar-menu-item "><Link to='/' key={singleCategory.categoryId}>{singleCategory.categoryName} </Link></li>
        })}
        
        {/* <li className="sidebar-menu-item "><Link to='/Drink'>Drink </Link></li>
        <li className="sidebar-menu-item "><Link to='/Steak'>Steak </Link></li> */}
      </ul>
    </div>
    </>
  )
}

export default SideBar
