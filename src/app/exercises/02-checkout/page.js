'use client';
import React from 'react';

import CheckoutFlow from './CheckoutFlow';
import StoreItem from './StoreItem';
import DATA from './data';
import reducer from './reducer';
import './styles.css';

function CheckoutExercise() {
  const [cart, dispatch] = React.useReducer(
    reducer,
    null,
    () => {
      return {
        isLoaded: false,
        items: []
      };
    }
  );

  React.useEffect(() => {
    console.log('load-items');
    dispatch({
      type: 'load-items',
    });
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'save-items' });
  }, [cart]);

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: 'add-item',
                  item,
                });
              }}
            />
          ))}
        </div>

        <CheckoutFlow
          cart={cart}
          taxRate={0.15}
          handleDeleteItem={(item) =>
            dispatch({
              type: 'delete-item',
              item,
            })
          }
        />
      </main>
    </>
  );
}

export default CheckoutExercise;
