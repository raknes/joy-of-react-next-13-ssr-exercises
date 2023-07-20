import produce from 'immer';

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case 'add-item': {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        if (itemIndex !== -1) {
          draftState.items[itemIndex].quantity += 1;
          return;
        }

        draftState.items.push({
          ...action.item,
          quantity: 1,
        });
        return;
      }

      case 'delete-item': {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        draftState.items.splice(itemIndex, 1);
        return;
      }

      case 'load-items': {
        draftState.isLoaded = true;
        const savedItems = window.localStorage.getItem('cart-items');
        console.log(draftState);
        if (typeof savedItems === 'string') {
          draftState.items = [...JSON.parse(savedItems)];
        }
        return;
      }


      case 'save-items': {
        console.log('save-items', state.items);
        window.localStorage.setItem('cart-items', JSON.stringify(state.items));
        return;
      }
    }
  });
}

export default reducer;
