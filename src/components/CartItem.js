import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <label>
          Quantity:
          <input
            type="number"
            min="0"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
