import React, { useState } from 'react';

const Orders = (props) => {
  const [count, setCount] = useState(1);
  const [totalPrice,setTotalPrice] = useState(props.price);


  const decreaseCount = () => {
    setCount(count - 1);
    setTotalPrice(count * props.price);
  };

  const increaseCount = () => {
    setCount(count + 1);
      setTotalPrice(count* props.price);
  };

  return (
    <>    
      <div className="table-row">
        <div className="col-image">
          <img className="img-fluid" src={props.img} alt="Burger" />
        </div>
        <div className="col-name">
          <p>{props.name}</p>
        </div>
        <div className="col-quantity">
          <p>
            <span onClick={decreaseCount}>-</span> {count}{' '}
            <span onClick={increaseCount}>+</span>
          </p>
        </div>
        <div className="col-price">
          <p>{totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default Orders;