import "../styles/CartSideBar.css";
import React from "react";
import { Link } from "react-router-dom";

const CartSideBar = (props) => {
  const { navVisible, cart } = props;
  const navContainerClass = `nav-container ${
    navVisible ? "showNav" : "hideNav"
  } ${!navVisible ? "hidden" : ""}`;
  console.log(cart);
  return (
    <>
      <div className={navContainerClass}>
        {cart.length ? (
          <ul className="ulcss">
            {cart.map((item, index) => (
              <div>
                <li key={index} className="list-item">
                  <img
                    className="d-flex justify-content-center"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    src={item?.link}
                    alt=""
                  />
                  <div>商品:{item.name}</div>
                  <div>
                    NT${item.price} x {item.quantity}
                  </div>

                  <div>總計NT${item.price * item.quantity}</div>
                </li>
                <hr />
              </div>
            ))}
          </ul>
        ) : (
          <div className="m-2">目前購物車為空</div>
        )}

        {cart.length > 0 && (
          <div className="cart-chkt-btn-cont">
            <button>
              <Link className="link-without-underline" to="Cart">
                訂單結帳
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSideBar;
