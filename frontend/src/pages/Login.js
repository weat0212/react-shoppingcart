import React from "react";
import "../styles/Cards.css";
import Footer from "../component/footer";
import axios from "../service/axios";

const Login = ({setLoginStatus: setLoginStatus}) => {

  let POST = (e) => {
    e.preventDefault();

    try {
      axios.post("/login").then(resp => {

        if (resp?.data.success) {
          alert("登入成功" + resp?.data.user.name + "\n" + new Date(resp?.data.loginTime));
          let user = resp.data.user;
          console.log("[使用者資訊]:", user);
          setLoginStatus(user);
        } else {
          alert("登入失敗！")
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
      <Footer />
    </div>
  );
};

export default Login;
