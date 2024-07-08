import React from "react";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
