import React from "react";
import "../styles/Nav.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cards" class="nav-link">
                  Cake
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/News" class="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" class="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Shop" class="bnt nav-link">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
