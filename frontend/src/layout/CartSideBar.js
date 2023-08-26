import "../styles/CartSideBar.css";
import React from 'react';
import { Link } from "react-router-dom";

const CartSideBar = (props) => {
    const { navVisible, cart } = props;
    const navContainerClass = `nav-container ${navVisible ? 'showNav' : 'hideNav'} ${!navVisible ? 'hidden' : ''}`;
    console.log(cart)
    return(
        <>
            <div className={navContainerClass}>
                {/* Your navigation content goes here */}
                {cart.length ?
                    cart?.map((item, index) => {
                        return (
                            <>
                            <li key={index}>
                                <div>{item.name}</div>
                                <div>${item.price}</div>
                                <div>x {item.quantity}</div>
                                <div>${item.price * item.quantity}</div>
                            </li>
                            <button>
                                <Link to="Cart">訂單結帳</Link>
                            </button>
                            </>
                        );}
                    ) :
                    <div>目前購物車為空</div>
                }

            </div>
        </>
    )
}

export default CartSideBar;