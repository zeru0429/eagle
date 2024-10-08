export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.foodId === action.id
      );
    
      let newBasket = [...state.basket];
    
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket !`
        );
      }
    
      return {
        ...state,
        basket: newBasket,
    };

    case "SET_AMOUNT":
      const updatedBasket = state.basket.map((item) =>
        item.foodId === action.foodId
          ? { ...item, amount: action.amount }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
      };

    default:
      return state;
  }
};

export default reducer;