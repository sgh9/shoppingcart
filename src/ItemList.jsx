import React, { useState, useContext, useEffect } from 'react';
import { ShoppingContext } from './Context/ShoppingContext';

const ItemList = () => {
  const { cartItems, incrementCount, removeItem } = useContext(ShoppingContext);

  const handleOnChange = (e)=> {
    const{ name, value } = e.target;
    incrementCount(name, value );
  }

  const itemsPrice = () => {
    if(!cartItems.length) {
      return 0;
    }

    let totalPrice = cartItems?.map(item => item.count * item.price).
    reduce((acc, item) => (acc += item), 0);
    return totalPrice.toFixed(2);
  };

  return (
    <table className="show-cart table">
      <tbody>
      <>
        {cartItems?.map((item, i) => {
         
          return (
            
            <tr key={i}>
              <td>{item?.name}</td>
              <td>(${item?.price})</td>
              <td>
                <div className="input-group">
                  <button onClick={()=> incrementCount(item.name, -1) } className="minus-item input-group-addon btn btn-primary">
                    -
                  </button>
                  <input
                    type="number"
                    className="item-count form-control"
                    name={item?.name}
                    value={item?.count}
                    max={30}
                    onChange={handleOnChange}
                  />
                  <button onClick={()=> incrementCount(item.name, 1) } className="plus-item btn btn-primary input-group-addon">
                    +
                  </button>
                </div>
              </td>
              <td>
                <button onClick={()=> removeItem(item.name)} className="delete-item btn btn-danger">X</button>
              </td>
            </tr>
           
          );
         
        })}
         <tr><td rowSpan='4'>Total price: ${itemsPrice()} </td></tr>
        </>
      </tbody>
     
    </table>
  );
};

export default ItemList;
