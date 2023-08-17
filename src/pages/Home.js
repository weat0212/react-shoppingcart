import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../styles/Cards.css";
import Footer from "../component/footer";

const card = [
  {
    name: "苺のケーキ",
    description:
      "草莓和鮮奶油夾在海綿上，裝飾著草莓、柑橘類水果和獼猴桃等五顏六色的水果。",
  },
  {
    name: "苺のケーキ",
    price: "NT$300",
    description:
      "草莓和鮮奶油夾在海綿上，裝飾著草莓、柑橘類水果和獼猴桃等五顏六色的水果。",
  },
  {
    name: "苺のケーキ",
    price: "NT$300",
    description:
      "草莓和鮮奶油夾在海綿上，裝飾著草莓、柑橘類水果和獼猴桃等五顏六色的水果。",
  },
];

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="mt-5">
        <img src="images/143.png" className="w-100 "></img>
        <div className="container d-flex justify-content-center p-3">
          <Card
            className="m-3"
            sx={{ maxWidth: 345 }}
            style={{ borderRadius: 20 }}
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
            style={{ borderRadius: 20 }}
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
            style={{ borderRadius: 20 }}
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

      <Footer />
    </>
  );
};

export default Home;
