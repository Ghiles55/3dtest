import React from "react";
import Link from "next/link";

const orderConfirmed = () => {
  return (
    <div
      className="center_container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          width: "80vw",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src="/order_confirmed.svg" />
        <p
          style={{
            fontSize: "3rem",
            fontWeight: "600",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          {" "}
          Order successfully registered !{" "}
          {" "}
        </p>
        <p style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "Raleway, sans-serif",
            color:'#319795'
          }}>
        <Link href="/customiser">Go back to customiser</Link>
        </p>
      </div>
    </div>
  );
};

export default orderConfirmed;
