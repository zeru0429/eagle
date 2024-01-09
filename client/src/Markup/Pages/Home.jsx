// Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../util/axios';
import './home.css';
import FoodInCategory from '../Components/FoodInCategory/FoodInCategory';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('api/food');
      setFood(response.data.data);
      filterCategory(response.data.data);
      setFilteredFood(response.data.data);
    };

    function filterCategory(foodList) {
      setCategory([...new Set(foodList.map(food => food.categoryName))]);
    }

    fetchData();
  }, []);

  const handleLiClick = (path) => {
    setFilteredFood(filterByCategoryId(food, path));
    setCurrentCategory(path);
  };

  const filterByCategoryId = (foodArray, categoryName) => {
    return categoryName === 'all' ? food : foodArray.filter(food => food.categoryName === categoryName);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar mt-5">
          <h2 style={{color: 'white', fontWeight:'bold'}}>Food Order</h2>
          <ul className="sidebar-menu">
            <li className={`sidebar-menu-item ${currentCategory === "all" ? 'active' : ''}`} onClick={() => handleLiClick("all")}>
              <Link to='/'>All</Link>
            </li>
            {category.map(singleCategory => (
              <li key={singleCategory} className={`sidebar-menu-item ${currentCategory === singleCategory ? 'active' : ''}`} onClick={() => handleLiClick(singleCategory)}>
                <Link to='/'>{singleCategory}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Content */}
        <div className="col-md-9">
          {currentCategory && <FoodInCategory title={currentCategory} foods={filteredFood} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
