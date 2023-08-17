import React from "react";
import Footer from "../component/footer";
import "../styles/Cards.css";

const News = () => {
  return (
    <div className="">
      <img
        src="images/Beginner.gif"
        className="w-100"
        style={{ height: "50" }}
      ></img>
      <div className="container d-flex justify-content-center p-3">
        <h2 className="text-center " style={{ color: "rgb(150, 126, 118)" }}>
          透過蛋糕
          <br /> 為許多人帶來樂趣 <br />
          <br />
          <h4>ケーキを通して 多くの人に楽しさを</h4>
        </h2>
      </div>
      <div className="container d-flex justify-content-center">
        <p className="text-center " style={{ color: "rgb(150, 126, 118)" }}>
          透過蛋糕為 許多人帶來樂趣，連接人們的蛋糕。
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

      <Footer />
    </div>
  );
};

export default News;
