import React from "react";
import {useCart} from "../model/provider/CartProvider";

const Cart = () => {
  const {cart} = useCart();
  console.log("[購物車]：", cart)

  function calculateTotal() {
    let total = 0;

    cart?.forEach((item) => {
        console.log("[item]:", item)
      total += item.price * item.quantity;
    });

    return total;
  }

  return (
      <div>
          <br/><br/><br/><br/>

          <table className="table">
              <thead>
              <tr>
                  <th scope="col">品項</th>
                  <th scope="col">單價</th>
                  <th scope="col">數量</th>
                  <th scope="col">小計</th>
              </tr>
              </thead>
              <tbody>
              {/* 要使用可選串連，因為 cart 可能是 undefined */}
              {cart?.map((item, index) => {
                  return (
                      <tr key={index}>
                          <td>{item.name}</td>
                          <td>${item.price}</td>
                          <td>x {item.quantity}</td>
                          <td>${item.price * item.quantity}</td>
                      </tr>
                  );
              })}
              </tbody>
          </table>
          <h5>總計：${calculateTotal()}</h5>
      </div>
  );
};

export default Cart;
