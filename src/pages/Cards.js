import React, {useEffect, useState} from "react";
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

  // 彈跳視窗
  const [modalConfig, setModalConfig] = React.useState({show: false, content: ""});

  function showDialog(product) {
    setModalConfig({show: true, content: `已將「${product?.name}」加入購物車！`});
  }

  function handleQuantityChange(e, index) {
    setCakes(prev => prev.map((cake, i) => {
      if (i === index) {
        cake.quantity = Number(e.target.value);
        return cake;
      } else {
        return cake;
      }
    }));
  }

  function handleOnClick(e, index, change) {
    e.preventDefault();
    setCakes(prev => prev.map((cake, i) => {
      if (i === index) {
        cake.quantity += change;
        if (cake.quantity < 0) cake.quantity = 0;
        return cake;
      } else {
        return cake;
      }
    }));
  }

  function handleAddCart(product) {
    showDialog(product);

    let found = cart.find(c => c.name === product.name);
    if (found) {
      setCart(prev => prev.map(p => {
        if (p.name === product.name) {
          p.quantity += product.quantity;
        }
        return p;
      }))
    } else {
      setCart(prev => [...prev, product]);
    }
  }

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
                src={item?.link}
                alt=""
              />{" "}
              {/* 從CAKES引入的圖片 */}
              {/* 商品名稱 */}
              <div className=" p-0  ">
                <div
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    textShadow: "1px 1px 3px rgba(51, 29, 44, 0.9)",
                  }}
                  className=" m-1 card-title container "
                >
                  {item?.name}
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
                  {item?.price}
                </div>

                {/* 描述 */}
                <div
                  style={{ fontSize: 14, textAlign: "center" }}
                  className="text2 container"
                >
                  {item?.description}
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
                  onClick={e => handleOnClick(e, index, 1)}
                >+</button>
                <input
                  className="text-center "
                  style={{
                    width: 80,
                    outline: "none",
                    border: "1px solid #EADBC8",
                    color: "rgb(150, 126, 118)",
                  }}
                  type="text"
                  value={item?.quantity}
                  onChange={e => handleQuantityChange(e, index)}
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
                  onClick={e => handleOnClick(e, index, -1)}
                >-</button>
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
      <CenterModal show={modalConfig.show} onHide={() => setModalConfig(prevState => {
        return {...prevState, show: false}
      })} content={modalConfig?.content}/>
      <Footer />
    </>
  );
};

export default MyCards;
