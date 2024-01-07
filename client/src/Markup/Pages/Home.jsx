import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../util/axios';
import './home.css';
import FoodInCategory  from '../Components/FoodInCategory/FoodInCategory'


const Home = () => {
  const [category, setCategory] = useState([]);
  const [food, setFood] = useState([]);
  const [filterdFood,setFilterdFood]=useState([]);

  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('api/food');
      setFood(response.data.data);
      filterCategory(response.data.data);
      setFilterdFood(response.data.data);
    };

    function filterCategory(foodList) {
      setCategory([...new Set(foodList.map(food => food.categoryName))]);
    }

    fetchData();
  }, []);

  const handleLiClick = (path) => {
   
    setFilterdFood(filterByCategoryId(food,path));
    setCurrentCategory(path);
  }


  const filterByCategoryId = (foodArray, categoryName) => {
    return categoryName === 'all'? food : foodArray.filter(food => food.categoryName === categoryName);
  }


  return (
    <>
      {/* sidebar */}
      <div className="sidebar">
        <h2>Food Order</h2>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item" onClick={() => handleLiClick("all")}>
            <Link to='/'>All </Link>
          </li>
          {category.map(singleCategory => (
            <li key={singleCategory} onClick={() => handleLiClick(singleCategory)} className="sidebar-menu-item">
              <Link to='/'>{singleCategory}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* body con */}
      {currentCategory && <FoodInCategory title={currentCategory} foods={filterdFood} />}
    </>
  );
};

export default Home;


   


