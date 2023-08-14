import React from "react";
import { useDispatch } from "react-redux";

const cakes = [
  {
    link: "./images/cake1.jpg",
    name: "紅茶戚風蛋糕",
    price: "NT$300",
    description:
      "大量使用英國TWININGS伯爵茶葉，細心地萃取茶葉精華，將色澤、香氣與口感完美融合。",
  },
  {
    link: "./images/cake5.jpg",
    name: "巧克力戚風蛋糕",
    price: "NT$500",
    description:
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是小朋友們都愛不釋手的招牌口味。",
  },
  {
    link: "./images/cake6.jpg",
    name: "草莓戚風蛋糕",
    price: "NT$400",
    description:
      "將法國進口的新鮮果泥逐漸融入蛋糕中，在夢幻的粉紅色澤下，給您繽紛的甜蜜滋味。",
  },
  {
    link: "./images/cake4.jpg",
    name: "抹茶戚風蛋糕",
    price: "NT$600",
    description:
      "採用日本丸久小山園抹茶粉，茶香濃厚、香醇不苦，入口即感受滿滿茶香的感動。",
  },
];

const MyCards = () => {
  const inventoryReducer = useDispatch();
  return (
    <div className="container  ">
      <div className="row ">
        {cakes.map((item, index) => (
          <div
            key={index}
            className="card  p-2 mb-3 container"
            style={{ width: "17rem", height: "" }}
          >
            <img className="card-img-top    " src={item.link} alt="" />{" "}
            {/* 從CAKES引入的圖片 */}
            {/* 商品名稱 */}
            <div className="card-body mt-3 p-1   ">
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
                  color: "#ABC4AA",
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
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) =>
                  inventoryReducer({
                    type: "increase",
                    target: e.target.nextElementSibling,
                  })
                }
              >
                +
              </button>
              <input style={{ width: 100 }} type="text" value={0} />
              <button
                type="button"
                className="btn btn-secondary"
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
            <div className="container d-flex justify-content-center ">
              <button
                style={{
                  backgroundColor: "rgb(150, 126, 118)",
                  fontSize: 14,
                  color: "rgb(254, 251, 246)",
                  width: "100px",
                }}
                type="button"
                className="btn btn-light"
              >
                加入購物車
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCards;
