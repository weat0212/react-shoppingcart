import Header from "./Header";
import Footer from "./Footer";

const Layout = ({loginStatus, setLoginStatus, children}) => {

    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;