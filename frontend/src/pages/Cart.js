import React, { useState } from "react";
import "../styles/Cart.css";

const Cart = (props) => {
  const { cart, setCart } = props;

  console.log("[購物車]：", cart);

  function calculateTotal() {
    let total = 0;

    cart?.forEach((item) => {
      console.log("[item]:", item);
      total += item.price * item.quantity;
    });

    return total;
  }

  const handleRemoveItem = (itemToRemove) => {
    // 使用 filter 方法來創建一個新的購物車陣列，僅排除掉要刪除的品項
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    // 更新購物車狀態以反映刪除操作
    setCart(updatedCart);
    console.log(itemToRemove);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">品項</th>
            
            <th scope="col">價格</th>      
            <th scope="col">數量</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {/* 要使用可選串連，因為 cart 可能是 undefined */}
          {cart?.map((item, index) => {
            return (
              <tr key={index}>
                <img
                  style={{
                    width: "150px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  src={item?.link}
                  alt=""
                />
                <h5>{item.name}</h5>
                        
                <td>${item.price}</td>
                <td>x {item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <button onClick={() => handleRemoveItem(item)}>刪除品項</button>
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
