import React from 'react';

const Product = ({ imageUrl, title, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '100%' }}>
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;