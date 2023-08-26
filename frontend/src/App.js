import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useState } from "react";
import Layout from "./layout/Layout";

function App() {
  // 購物車
  const [cart, setCart] = useState([]);
  // 登入狀態
  const [loginStatus, setLoginStatus] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}>
            <Route index element={<Home />} />
            <Route path="cards" element={<Cards cart={cart} setCart={setCart} />} />
            <Route path="News" element={<News />} />
            <Route path="Login" element={<Login setLoginStatus={setLoginStatus} />} />
            <Route path="Cart" element={<Cart cart={cart} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
