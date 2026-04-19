import { useState } from "react";

export default function CartItem() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 },
    { id: 2, name: "Snake Plant", price: 15, quantity: 1 }
  ]);

  // Increase quantity
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>

          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br /><br />

      <button onClick={() => window.location.href = "#"}>
        Continue Shopping
      </button>
    </div>
  );
}
