// FoodInCategory.jsx
import React from 'react';
import SingleFood from './SingleFood';

const FoodInCategory = (props) => {
  return (
    <div className="row row-padded drinkPage">
      <div className="col-md-5">
        <div className="fh5co-food-menu to-animate-2">
          <h3 className="fh5co-drinks">{props.title}</h3>
          <ul type="none">
            {props.foods && props.foods.map((singleProduct) => (
              <li className="Drink" key={singleProduct.foodId}>
                <SingleFood food={singleProduct} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodInCategory;
