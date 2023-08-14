import React from "react";

const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: "#F5EFE7",
        textAlign: "center",
        display: "inline",
        alignItems: "center",
      }}
    >
      <img
        className="container p-2"
        style={{
          width: 80,
          display: "flex",
          alignItems: "center",
        }}
        src="https://www.shinehouse.com.tw/cdn/shop/collections/image-930904.jpg?v=1681895292"
        alt=""
      />
      <h3 style={{ color: "#967E76", textAlign: "center", fontWeight: "bold" }}>
        潔西蛋糕店
      </h3>
    </nav>
  );
};

export default Nav;
