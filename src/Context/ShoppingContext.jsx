import React, { createContext, useReducer, useEffect } from 'react';
import shoppingReducer from './ShoppingReducer';

let initialItems = [
  // { name: 'Orange', price: 0.5, count: 1 },
  // { name: 'Lemon', price: 5, count: 1 },
  // { name: 'Banana', price: 1.22, count: 1 }
];

export const ShoppingContext = createContext(initialItems);

const ShoppingContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(shoppingReducer, initialItems);

  const addItemToCart = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { item }
    });
    
  };

  const incrementCount = (name ,count)=> {
    dispatch({
      type: 'INCREMENT_COUNT',
      payload: {name, count}
    });
  };
const removeItem = (name)=> {
  dispatch({
    type: 'REMOVE_ITEM',
    payload: {name}
  });
}

const removeAllItems = ()=> {
  dispatch({
    type: 'REMOVE_ITEMS'
  });
}
  return (
    <ShoppingContext.Provider
      value={{ 
        cartItems, 
        addItemToCart, 
        incrementCount,
        removeItem ,
        removeAllItems 
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
