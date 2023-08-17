import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Cards from "./pages/Cards";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

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
            <Route path="Shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
