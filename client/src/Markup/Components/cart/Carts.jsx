// Carts.jsx
import React, { useState } from 'react';
import { useStateValue } from '../../../Contexts/stateprovider';

const Carts = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  const [count, setCount] = useState(props.count);

  const handleDecrement = () => {
    setCount(count === 1 ? 1 : count - 1);
    dispatch({
      type: 'SET_AMOUNT',
      foodId: props.foodId,
      amount: count ,
    });
    props.calculateTotalPrice(); // Call the function here
  };

  const handleIncrement = () => {
    setCount(count === 50 ? 50 : count + 1);
    dispatch({
      type: 'SET_AMOUNT',
      foodId: props.foodId,
      amount: count,
    });
    props.calculateTotalPrice(); // Call the function here
  };

  // console.log(count);

  return (
    <>
      <div className="row border-top border-bottom p-3">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={props.resimg} alt={props.name} style={{ maxWidth: '100%' }} />
          </div>
          <div className="col">
            <div className="row text-muted fs-6">{props.name}</div>
            <div className="row text-muted fs-6">{props.specificName}</div>
          </div>
          <div className="col d-flex align-items-center">
            <span className="cursor-pointer btn btn-outline-secondary btn-sm me-2" onClick={handleDecrement}>-</span>
            <span className="border mx-2 px-3">{count}</span>
            <span className="cursor-pointer btn btn-outline-secondary btn-sm" onClick={handleIncrement}>+</span>
          </div>
          <div className="col fs-6">{(count * props.price).toFixed(2)} <span className="fs-6 close">Birr</span></div>
        </div>
      </div>
    </>
  );
}

export default Carts;
