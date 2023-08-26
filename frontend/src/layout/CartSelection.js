import "../styles/CartSelect.css";
import React, { useState } from 'react';

const CartSelection = (props) => {
    const { navVisible } = props;
    const navContainerClass = `nav-container ${navVisible ? 'showNav' : 'hideNav'} ${!navVisible ? 'hidden' : ''}`;

    return(
        <>

        <div className="nav-container hidden hideNav">
            <ul className="nav-list">
                <li className="list-item"><a href=""><i className="fa fa-gift"></i></a></li>
                <li className="list-item"><a href=""><i className="fa fa-moon-o"></i></a></li>
                <li className="list-item"><a href=""><i className="fa fa-star"></i></a></li>
                <li className="list-item"><a href=""><i className="fa fa-truck"></i></a></li>
                <li className="list-item"><a href=""><i className="fa fa-umbrella"></i></a></li>
            </ul>

        </div>

        <a href="https://codepen.io/tonkec" className="ua" target="_blank">
            <i className="fa fa-user"></i></a>

            <div className={navContainerClass}>
                {/* Your navigation content goes here */}
            </div>
        </>
    )
}

export default CartSelection;