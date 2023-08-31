import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useState } from "react";
import Layout from "./layout/Layout";
import {CartProvider} from "./model/provider/CartProvider";

function App() {

  // 登入狀態
  const [loginStatus, setLoginStatus] = useState();

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}>
              <Route index element={<Home />} />
              <Route path="cards" element={<Cards />} />
              <Route path="News" element={<News />} />
              <Route path="Login" element={<Login setLoginStatus={setLoginStatus} />} />
              <Route path="Cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
