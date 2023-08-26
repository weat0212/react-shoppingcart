import "../styles/CartSideBar.css";
import React from "react";



const ShopCartIcon  = (props) => {
    const { navVisible, setNavVisible } = props;


    const toggleNav = () => {
        setNavVisible(!navVisible);
    };


    const btnNavClass = `${navVisible ? 'animated' : ''}`;

     return (
         <>
        <button className={btnNavClass} onClick={toggleNav} >
            <img src="images/icon/shopping-cart.svg" alt="Cart" width="25px" height="30px" />
        </button>

         </>
    )
}
export default ShopCartIcon;