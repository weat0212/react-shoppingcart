import React from "react";
import Footer from "../layout/Footer";
import "../styles/Cards.css";

const News = () => {
  return (
    <>
      <img
        src="images/freeg-97.jpg"
        className="w-100 mt-0"
        id="images143"
      ></img>
      <div className="container d-flex justify-content-center p-3">
        <h3>關於我們</h3>
      </div>
      <div className="text3">
        ケーキを通して 多くの人に楽しさを
        <br />
        透過精心製作的蛋糕，為眾多人帶來無盡的愉悅與喜悅。
      </div>
      <div className="container d-flex justify-content-center p-3">
        <h2
          className="text-center "
          style={{ color: "rgb(150, 126, 118)" }}
          id="textkeyframes"
        >
          <h4>ケーキを通して 多くの人に楽しさを</h4>
        </h2>
      </div>
      <div
        className="container d-flex justify-content-center"
        id="textkeyframes"
      >
        <p className="text-center ">
          連接人們的蛋糕
          <br />
          <br />
          我們一邊製作蛋糕，一邊想著靠近蛋糕帶回家的“超越”，
          <br />
          <br />
          我們在商店裡與顧客交談。
          <br />
          <br />
          在松樹的早晨，將被烘焙奶油泡芙的香氣所籠罩。
          <br />
          <br />
          我們正在等待您製作這樣一種蛋糕，它充分利用了成分，
          <br />
          <br />
          具有高品質但有點緩解的味道，並給您一點 松樹味。 <br />
          <br />
          無論是生日，慶祝日還是普通的日子，分享您感受到的快樂， 因為它很好吃。
        </p>
      </div>
      <img src="images/6452.jpeg" className=" container d-flex justify-content-center mb-4" id="images143" style={{ width: "600px", height: "350px", }}></img>
    </>
  );
};

export default News;
