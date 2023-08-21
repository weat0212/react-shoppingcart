import React from "react";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
