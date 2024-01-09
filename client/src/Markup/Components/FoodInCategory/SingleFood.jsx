import { Avatar } from '@mui/material';
import React from 'react';
import { useStateValue } from '../../../Contexts/stateprovider';

const SingleFood = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        foodId: props.food.foodId,
        categoryId: props.food.categoryId,
        foodName: props.food.foodName,
        amharicName: props.food.amharicName,
        price: props.food.price,
        imageUrl: props.food.imageUrl,
        categoryName: props.food.categoryName,
        amount: 1
      },
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: props.food.foodId, // Fix: use props.food.foodId
    });
  };

  const isInBasket = basket.some((item) => item.foodId === props.food.foodId); // Fix: use props.food.foodId

  return (
    <>
      <div className="itemImg">
        <Avatar
          alt={props.food.foodName} // Fix: use props.food.foodName
          src={props.food.imageUrl} // Fix: use props.food.imageUrl
          sx={{ width: 60, height: 60 }}
        />
      </div>
      <div className="itemDescription">
        <p className='mb-0 fs-5'>{`${props.food.foodName} (${props.food.amharicName})`}</p>
        <p className='mb-0'>{`${props.food.amharicName}`}</p>
        <p className='mb-0 '>{`${props.food.price}`}
          {isInBasket ? (
            <button onClick={removeFromBasket} className="addButten addedbuttem bg-danger text-light">
              Remove from Cart
            </button>
          ) : (
            <button onClick={addToBasket} className="addButten addedbuttem text-light">
              Add to Cart
            </button>
          )}
        </p>
      </div>
    </>
  );
};

export default SingleFood;
