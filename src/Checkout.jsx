import React, { useState, useEffect } from "react";
import "./App.css";

const ProductDisplay = () => (
  <section>
    <h2 className="check">Checkout</h2>
    <div className="description">
      <div className="product">
        <img
          src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1661613925/binance_logo.png"
          alt="The cover of Binance USD"
        />
        <h2>Binance USD</h2>
      </div>
      <p>US$50.00</p>
    </div>
    <form action="/create-checkout-session" method="POST">
      <div className="btn">
        <button className="checkout" type="submit">
          Checkout
        </button>
      </div>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
