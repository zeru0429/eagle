// FoodInCategory.jsx
import React from 'react';
import SingleFood from './SingleFood';

const FoodInCategory = (props) => {
  return (
    <div className="container-fluid mt-4">
      <h3 className="text-center mb-4">{props.title}</h3>
      <div className="row">
        {props.foods && props.foods.map((singleProduct) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={singleProduct.foodId}>
            <SingleFood food={singleProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodInCategory;
