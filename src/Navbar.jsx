import React, { useState, useContext } from 'react';
import { ShoppingContext } from './Context/ShoppingContext';

const Navbar = ({ handleShowCart }) => {
  const {cartItems , removeAllItems} = useContext(ShoppingContext);

  const itemCount = () => {
    let itemCount = cartItems?.map(item => item.count)
      .reduce((acc, item) => (acc += item), 0);

    return itemCount;
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top bg-faded">
      <div className="row px-2">
        <div className="col">
          <button
            onClick={() => {
              handleShowCart();
            }}
            type="button"
            className="btn btn-primary mx-2"
            data-toggle="modal"
            data-target="#cart"
          >
            Cart (<span className="total-count">{itemCount()}</span>)
          </button>
          <button onClick={()=> removeAllItems()} className="clear-cart btn btn-danger">Clear Cart</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
