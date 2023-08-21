import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cards" element={<Cards />} />
            <Route path="News" element={<News />} />
            <Route path="Login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
