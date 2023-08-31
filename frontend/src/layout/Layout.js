import Header from "./Header";
import Footer from "./Footer";
import CartSideBar from "./CartSideBar";
import {useState} from "react";
import {useCart} from "../model/provider/CartProvider";

const Layout = ({loginStatus, setLoginStatus, children}) => {

    const {cart} = useCart();

    const [navVisible, setNavVisible] = useState(false);
    console.log(cart)
    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} navVisible={navVisible} setNavVisible={setNavVisible}/>
            <CartSideBar cart={cart} navVisible={navVisible}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;