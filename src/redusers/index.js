import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actionTypes';

const initialState = {
  cartItems: [],
  products: [{
    id: 1,
    name: 'JS',
    img: 'js.jpeg',
    price: 50
  },
  {
    id: 2,
    name: 'React',
    img: 'react.jpg',
    price: 30
  },
  {
    id: 3,
    name: 'Redux',
    img: 'redux.png',
    price: 20
  }]
};

const redusers = (state = initialState, {type, payload}) => {
  switch (type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, ...state.products.filter((i) => {
            if (i.id === payload) {
              return i
            } else return false
          })]
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: [...state.cartItems.filter((i) => {
            if (i.id !== payload) {
              return i
            } else return false
          })]
        }
      default:
          return state
  }
}

export default redusers;