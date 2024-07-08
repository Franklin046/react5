import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function CartPage() {
  const { items, totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartPage;
