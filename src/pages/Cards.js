import React from "react";
import { useDispatch } from "react-redux";
import "../styles/Cards.css";

const cakes = [
  {
    link: "./images/berry1.png",
    name: "苺のケーキ",
    price: "NT$300",
    description:
      "草莓和鮮奶油夾在海綿上，裝飾著草莓、柑橘類水果和獼猴桃等五顏六色的水果。",
  },
  {
    link: "./images/crepe1.png",
    name: "ミルクレープ",
    price: "NT$500",
    description:
      "5張薄烤的可麗餅麵糰，交替塗了4層鮮奶油和奶油凍。 水果夾著草莓、香蕉和獼猴桃。",
  },
  {
    link: "./images/fruit1.png",
    name: "フルーツのケーキ",
    price: "NT$400",
    description:
      "將法國進口的新鮮果泥逐漸融入蛋糕中，在夢幻的粉紅色澤下，給您繽紛的甜蜜滋味。",
  },
  {
    link: "./images/gatou1.png",
    name: "ガトーショコラ",
    price: "NT$600",
    description:
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是大家都愛不釋手的招牌口味。",
  },
  {
    link: "./images/5566.png",
    name: "ブーケ",
    price: "NT$600",
    description:
      "夾在草莓，柳丁，香蕉和鮮奶油之間，放在切片的海綿上，堆積著具有精緻花瓣形象的水果。",
  },
  {
    link: "./images/332.png",
    name: "トライフルケーキ",
    price: "NT$600",
    description:
      "用奶油、鮮奶油、五顏六色的水果和大量的蛋奶醬在蓬鬆的海綿上製成的豪華蛋糕。",
  },
  {
    link: "./images/f88.png",
    name: "苺のタルト",
    price: "NT$600",
    description:
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是大家都愛不釋手的招牌口味。",
  },
  {
    link: "./images/monc.png",
    name: "モンブラン",
    price: "NT$600",
    description:
      "一種用杏仁奶油烤制的餡餅。 鮮奶油和栗子放在蛋撻上，最後在餡餅周圍塗上栗子奶油。",
  },
];

const MyCards = () => {
  const inventoryReducer = useDispatch();
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
                  value={0}
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
                <button className="shopbutton" type="button">
                  加入購物車
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyCards;
