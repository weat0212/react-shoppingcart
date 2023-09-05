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
            <th style={{ color: "#3F2E3E" }} className="col-1 col-md-4">
              品項
            </th>
            <th style={{ color: "#3F2E3E" }}>價格</th>
            <th style={{ color: "#3F2E3E" }}>數量</th>
            <th style={{ color: "#3F2E3E" }}>小計</th>
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
                <h6
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    textShadow: "1px 1px 3px rgba(51, 29, 44, 0.9)",
                  }}
                >
                  {item.name}
                </h6>

                <td style={{ color: "#85A389", fontWeight: "bold" }}>
                  ${item.price}
                </td>
                <td>x {item.quantity}</td>
                <td style={{ color: "#85A389", fontWeight: "bold" }}>
                  ${item.price * item.quantity}
                </td>
                <button
                  style={{ color: "rgb(150, 126, 118)" }}
                  onClick={() => handleRemoveItem(item)}
                >
                  刪除品項
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="calculateTotal">
        <h5>總計：${calculateTotal()}</h5>
      </div>
      <hr />
      <div style={{ marginLeft: "20px" }}>
        <h6
          className="p-1 m-3"
          style={{ fontWeight: "bold", color: "#3F2E3E" }}
        >
          如果您願意，請指定交貨日期和時間。
        </h6>
        <p className="p-1 m-3" style={{ fontSize: "14px" }}>
          *如果您希望在最短的時間內交貨，請訂購“未指定日期和時間”。
          <br />
          它將在5個工作日內發貨。
          *對於電子禮品和Nekopos送貨，無法指定日期和時間。
          <br />
          請注意，即使您輸入日期和時間，它也將無效。 *付款完成後將發貨。
        </p>
      </div>
      <div className="datecontainer">
        {/* 日期date */}
        <div>
          <p className="m-2" style={{ fontWeight: "bold", color: "#3F2E3E" }}>
            選擇您的首選交貨日期
          </p>
          <input type="date" style={{ marginLeft: "20px" }} />
        </div>
        <div className="p-1 m-2">
          <p className="p-1 m-1" style={{ fontWeight: "bold" }}>
            選擇交貨時間
          </p>
          <select className="deliverytime">
            <option value="red">指定時間</option>
            <option value="中午前">中午前</option>
            <option value="13-14時">13-14時</option>
            <option value="15-16時">15-16時</option>
            <option value="17-18時">17-18時</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="cartnote">
        <h6
          className="p-1 m-1"
          style={{ fontWeight: "bold", color: "#3F2E3E" }}
        >
          訂購注意事項
        </h6>
        <textarea
          id="contentnote"
          className="m-2"
          name="mytext"
          rows="4"
          cols="30"
        ></textarea>
      </div>
    </div>
  );
};

export default Cart;
