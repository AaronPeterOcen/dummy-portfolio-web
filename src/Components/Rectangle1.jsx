import React from "react";
import "./index.css";

function Rectangle1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1600px",
        height: "447px",
        backgroundColor: "grey",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h1 style={{ marginBottom: "0px", fontSize: "80px" }}>Eric Fidel</h1>
        <p style={{ marginTop: "0px" }}>For more check the p</p>
      </div>
      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>Fonts: SF Pro </h1>
      </div>
    </div>
  );
}

export default Rectangle1;
