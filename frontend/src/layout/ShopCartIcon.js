import "../styles/CartSideBar.css";
import React from "react";



const ShopCartIcon  = (props) => {
    // 從 props 中解構取得 navVisible 和 setNavVisible
    const { navVisible, setNavVisible } = props;

// 定義一個函式，用於切換 navVisible 的值
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    // 根據 navVisible 的值，設定按鈕的 CSS 類別
    // 如果 navVisible 為 true，則添加 'animated' 類別，否則保持空白
    const btnNavClass = `${navVisible ? 'animated' : ''}`;

    // ShopCartIcon 組件返回一個包含按鈕的 JSX 元素
     return (
         <>
         {/* 當按鈕被點擊時，調用 toggleNav 函式 */}
        <button className={btnNavClass} onClick={toggleNav} >
             {/* 顯示一個購物車圖標 */}
            <img src="images/icon/shopping-cart.svg" alt="Cart" width="25px" height="30px" />
        </button>

         </>
    )
}
export default ShopCartIcon;