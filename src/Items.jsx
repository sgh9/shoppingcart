import React, { useState, useContext } from 'react';
import Item from './Item';
import { ShoppingContext } from './Context/ShoppingContext';

const Items = () => {
  const cart = useContext(ShoppingContext);

  const [shoppingItems, setShoppingItems] = useState([
    {
      name: 'Orange',
      price: 0.5,
      src: 'http://www.azspagirls.com/files/2010/09/orange.jpg'
    },
    {
      name: 'Banana',
      price: 1.22,
      src:
        'http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg'
    },
    {
      name: 'Lemon',
      price: 5,
      src:
        'https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg'
    }
  ]);

  return (
    <div className="container">
      <div className="row mx-auto">
        {shoppingItems.map((item, i) => {
          return (
            <Item key={i} src={item.src} title={item.name} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Items;
