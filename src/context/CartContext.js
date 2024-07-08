import React, { createContext, useContext, useReducer, useEffect } from "react";
import image1 from "../images/Product1.jpg.jpg";
import image2 from "../images/Product2.jpg.jpg";
import image3 from "../images/Product3.jpg.jpg";
import image4 from "../images/Product1.jpg.jpg";

const CartContext = createContext();

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
        totalQuantity: action.payload.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),
        totalAmount: action.payload.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    case "UPDATE_QUANTITY":
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),
        totalAmount: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 10.99,
        quantity: 1,
        image: image1,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 15.99,
        quantity: 1,
        image: image2,
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 20.99,
        quantity: 1,
        image: image3,
      },
      {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        price: 25.99,
        quantity: 1,
        image: image4,
      },
    ];
    dispatch({ type: "SET_ITEMS", payload: mockData });
  }, []);

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <CartContext.Provider value={{ ...state, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
