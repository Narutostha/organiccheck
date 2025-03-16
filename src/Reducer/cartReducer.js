export const cartReducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "add_product": {
      const existingItem = state.find(
        (item) =>
          item.product.name === action.payload.product.name &&
          item.product.category === action.payload.product.category &&
          item.product.price === action.payload.product.price
      );
      console.log(existingItem);
      if (existingItem) {
        return state.map((item) => {
          return item.product.sizes === action.payload.product.sizes &&
            item.product.colors === action.payload.product.colors
            ? {
                product: action.payload.product,
                quantity: item.quantity + 1,
              }
            : item;
        });
      }
      return [...state, action.payload];
    }
    case "update_cart":
      return state.map((item) => {
        return item.product === action.payload.product
          ? {
              product: action.payload.product,
              quantity: action.payload.quantity,
            }
          : item;
      });

    case "delete_product":
      return state.filter((item) => item !== action.payload);
    default:
  }
};
