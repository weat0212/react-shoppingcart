import React from "react";
import "../styles/Cards.css";
import Footer from "../layout/Footer";
import axios from "../service/axios";
import {CenterModal} from "../layout/CenterModal";

const Login = ({setLoginStatus: setLoginStatus}) => {

  // 彈跳視窗
  const [modalConfig, setModalConfig] = React.useState({show: false, content: ""});

  function showDialog(resp) {
    let login = resp?.success;
    let content = login ? `登入成功！${resp.user.name}` : `帳號密碼錯誤！請重新再試`
    setModalConfig({show: true, content: content});
  }

  let POST = (e) => {
    e.preventDefault();

    try {
      axios.post("/login").then(resp => {

        if (resp?.data.success) {
          showDialog(resp?.data);
          let user = resp.data.user;
          console.log("[使用者資訊]:", user);
          setLoginStatus(user);
        } else {
          showDialog(resp?.data);
        }
      }, err => {
        console.log("錯誤：", err);
        alert("系統忙碌中，請稍後再試！")
      });
    } catch (error) {
      console.log("錯誤：", error);
      alert("系統忙碌中，請稍後再試！")
    }
  };

  return (
    <div>
      <div className="container login center inner m-5 ">
        <form className="">
          <div className="">
            <h2>登入</h2>
            <label for="exampleInputEmail1" class="form-label">
              帳號
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              密碼
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              記住我
            </label>
          </div>
          <button type="submit" class="loginbutton" onClick={POST}>
            開始購物吧！
          </button>
        </form>
      </div>
      <CenterModal show={modalConfig.show} onHide={() => setModalConfig(prevState => {
        return {...prevState, show: false}
      })}>
        <div>{modalConfig.content}</div>
      </CenterModal>
    </div>
  );
};

export default Login;
