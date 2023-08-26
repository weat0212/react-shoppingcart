import Header from "./Header";
import Footer from "./Footer";
import CartSelection from "../layout/CartSelection";
import {useState} from "react";

const Layout = ({loginStatus, setLoginStatus, children}) => {
    const [navVisible, setNavVisible] = useState(false);

    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} navVisible={navVisible} setNavVisible={setNavVisible}/>
            {children}
            <CartSelection navVisible={navVisible}/>
            <Footer/>
        </>
    )
}

export default Layout;