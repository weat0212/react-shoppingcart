import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../styles/Cards.css";
import Footer from "../layout/Footer";
import { useState, useEffect } from "react";

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.querySelector(".images84774");
      const imageRect = imageElement.getBoundingClientRect();

      if (imageRect.top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mt-5" style={{ backgroundColor: "#F5F5F5" }}>
        <img src="images/143.png" className="w-100 " id="images143"></img>
        <div className="text3">
          無論是生日、慶祝日，還是普通的日子，
          <br />
          都猶如一塊精心製作的蛋糕般甜蜜。
        </div>
        <div>
          <h5
            className=" p-5 text-center"
            style={{ color: "rgb(150, 126, 118)" }}
          >
            每一層蛋糕都蘊藏著愛與甜蜜，為你的時刻增添幸福滋味，愜意享受每個美味瞬間。
          </h5>
        </div>
        <div class="content-wrapper">
          
          <div class="grid-container">
            <div class="image-container">
              <img src="images/84774.jpeg" class="images84774" />
            </div>
            <div class="text-content">
            <img className="p-3" src="https://j-croissant.jp/wp/wp-content/themes/j-croissant/assets/img/quality/quality_1.svg" alt="" />
              <p className="container">
              混合了來自北海道和長野縣的三種小麥粉，包括全麥麵粉，
                <br />
                具有獨特的黃金比例，最能突出麵團的鮮味。
              </p>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="grid-container1">
            <div class="image-container">
              <img src="images/79383.jpeg" class="images84774" />
            </div>
            <div class="text-content">
            <img className="p-3" src="https://j-croissant.jp/wp/wp-content/themes/j-croissant/assets/img/quality/quality_2.svg" alt="" />
              <p className="container">
                選用當季新鮮水果、堅持使用在地小農種植的天然食材，
                <br />
                不使用人工香料及膨鬆劑等添加物，溫暖心房，愉悅每刻。
              </p>
            </div>
          </div>
        </div>
        <div class="grid-container">
            <div class="image-container">
              <img src="images/photo-79.webp" class="images84774" />
            </div>
            <div class="text-content">
            <img className="p-3" src="https://j-croissant.jp/wp/wp-content/themes/j-croissant/assets/img/quality/quality_3.svg" alt="" />
              <p className="container">
              純糖僅由奄美群島的甘蔗原料製成，並緩慢烘烤以形成天然晶體，
                <br />
                因此富含礦物質並緊緊鎖住風味。 這是一種溫和的天然甜味。
              </p>
            </div>
          </div>
        <div className=" mt-5  text-center">
          <h4>最新消息</h4>
        </div>
        <div className="container d-flex justify-content-center p-3">
          <Card
            className="m-3"
            sx={{ maxWidth: 345 }}
            style={{ borderRadius: 10 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="images/peich.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  熱門甜點【丸五戶桃子蛋糕】和限量食用的“時令凍糕桃子”
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  請享受 ♡
                  Pinead引以為豪的多汁桃子糖果，不僅可以用作日常獎勵，還可以作為您訪問的地方的紀念品。
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className="container "
                size="small"
                style={{ color: "rgb(150, 126, 118)" }}
              >
                more
              </Button>
            </CardActions>
          </Card>

          <Card
            className="m-3"
            sx={{ maxWidth: 345 }}
            style={{ borderRadius: 10 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="images/cat1.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  【永旺夢樂城桑名店限定】「我的貓蛋糕」著色♪體驗
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  我們將🐾在松樹永旺夢樂城桑名店獨家舉辦“我的貓芝士蛋糕”的著色體驗。
                  我們希望您通過糖果與您的孩子創造美好的回憶，因此我們準備了一個非常適合暑假的限量專案。
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className="container "
                size="small"
                style={{ color: "rgb(150, 126, 118)" }}
              >
                more
              </Button>
            </CardActions>
          </Card>

          <Card
            className="m-3"
            sx={{ maxWidth: 345 }}
            style={{ borderRadius: 10 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="images/g2.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  【僅限8/1~8/15】岡崎店將舉辦盛大的周年慶典！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  為了感謝訪問我們商店的許多人，我們將從 2023 年 8 月 1
                  日星期二開始舉辦周年紀念節。
                  小學生以下的兒童才會收到♪一個奶油泡芙。
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className="container "
                size="small"
                style={{ color: "rgb(150, 126, 118)" }}
              >
                more
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
