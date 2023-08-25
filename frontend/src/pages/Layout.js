import React from "react";
import "../styles/Nav.css";
import { Outlet, Link } from "react-router-dom";
import {CenterModal} from "../layout/CenterModal";

const Layout = ({loginStatus, setLoginStatus}) => {
  // 彈跳視窗
  const [modalConfig, setModalConfig] = React.useState({show: false, content: ""});

  console.log("[登入狀態]：", loginStatus);

  function handleLogout() {
    setLoginStatus(undefined);
    showDialog("您已成功登出！")
  }

  function showDialog(message) {
    setModalConfig({show: true, content: message});
  }

  return (
    <>
      {/*導覽列 */}
      <nav className="navbar navbar-expand-sm  py-0   bg-white  fixed-top">
        <div className="container-fluid  ">
          <a className="navbar-brand" href="javascript:void(0)">
            <img
              className="container "
              style={{
                width: 110,
                display: "flex",
                alignItems: "center",
              }}
              src="images/shop1.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" class="nav-link">
                  首頁
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cards" class="nav-link">
                  商品介紹
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/News" class="nav-link">
                  關於我們
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Cart" class="bnt nav-link">
                  購物車
                </Link>
              </li>

              {!loginStatus &&
                  <li className="nav-item">
                    <Link to="/Login" class="nav-link">
                      會員登入
                    </Link>
                  </li>}
              {loginStatus &&
                <>
                  <li className="nav-item">
                    <div className={"nav-link"}>
                      Hi, {loginStatus.name}
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className={"nav-link"} onClick={handleLogout} href={"#"}>
                      登出
                    </a>
                  </li>
                </>}
            </ul>
          </div>
        </div>
      </nav>
      <CenterModal show={modalConfig.show} onHide={() => setModalConfig(prevState => {
        return {...prevState, show: false}
      })}>
        <div>{modalConfig.content}</div>
      </CenterModal>
      <Outlet />
    </>
  );
};

export default Layout;
