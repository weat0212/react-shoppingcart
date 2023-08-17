import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import "../styles/Cards.css";
import Footer from "../component/footer";
import {CenterModal} from "../layout/CenterModal";
import mockCakes from "../model/mock/Cakes"

const MyCards = () => {

  // 商品
  const [cakes, setCakes] = useState(mockCakes);
  useEffect(() => {
    setCakes(cakes.map(cake => {
      return {...cake, quantity: 0};
    }));
  }, []);

  // 購物車
  const [cart, setCart] = useState([]);
  const inventoryReducer = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [selected, setSelected] = React.useState();
  return (
    <>
      <img src="images/mv.jpg" className="w-100 mt-5"></img>
      <div className="container ">
        <div className="row ">
          {cakes.map((item, index) => (
            <div
              key={index}
              className="container mt-5   p-2 mb-3 "
              style={{ width: "15rem", border: "none" }}
            >
              <img
                className="container d-flex justify-content-center"
                style={{ width: "200px", height: "150px", objectFit: "cover" }}
                src={item.link}
                alt=""
              />{" "}
              {/* 從CAKES引入的圖片 */}
              {/* 商品名稱 */}
              <div className=" p-0  ">
                <div
                  style={{
                    fontSize: 17,
                    color: "rgb(70, 78, 46)",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  className=" m-1 card-title container "
                >
                  {item.name}
                </div>

                {/* 價格 */}
                <div
                  style={{
                    fontSize: 15,
                    color: "#85A389",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  className="text container"
                >
                  {item.price}
                </div>

                {/* 描述 */}
                <div
                  style={{ fontSize: 14, textAlign: "center" }}
                  className="text2 container"
                >
                  {item.description}
                </div>
              </div>
              {/*加減按鈕 */}
              <div className="container d-flex justify-content-center ">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#EADBC8",
                    border: "none",
                    width: "30px",
                    height: "30px",
                  }}
                  type="button"
                  onClick={(e) =>
                    inventoryReducer({
                      type: "increase",
                      target: e.target.nextElementSibling,
                    })
                  }
                >
                  +
                </button>
                <input
                  className="text-center "
                  style={{
                    width: 80,
                    outline: "none",
                    border: "1px solid #EADBC8",
                    color: "rgb(150, 126, 118)",
                  }}
                  type="text"
                  value={item.quantity}
                />
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#EADBC8",
                    border: "none",
                    width: "30px",
                    height: "30px",
                  }}
                  type="button"
                  onClick={(e) =>
                    inventoryReducer({
                      type: "decrease",
                      target: e.target.previousElementSibling,
                    })
                  }
                >
                  -
                </button>
              </div>
              {/* 按鈕 */}
              <div className="container d-flex justify-content-center p-2 ">
                <button className="shopbutton" type="button" onClick={() => handleAddCart(item)}>
                  加入購物車
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} content={`已將「${selected?.name}」加入購物車！`}/>
      <Footer />
    </>
  );

  function handleAddCart(product) {

    setModalShow(true);
    setSelected(product);
    let found = cart.find(p => p.name === product.name);
    if (found) {
      found.quantity++;
    } else {
      product.quantity++;
      setCart([...cart, product]);
    }
    console.log("[購物車]：", cart);
  }
};

export default MyCards;
