import React from "react";
import { Divider } from "@mui/material";

export const admin_data_card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "28rem",
        height: "14rem",
        padding: "1rem",
        borderRadius: "0.375rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className={ `${props.dark ? "dark_light" : ""}`}
    >
      <div style={{ display:'flex', width:'100%' }}>
      <span
        style={{
          fontSize: "2rem",
        }}
      >
        {props.title}
      </span>
      </div>
      <Divider flexItem />
      <div  style={{ display:'flex', width:'100%', justifyContent:'flex-end' }}>
      <span
        style={{
          fontSize: "3rem",
        }}
      >
        {props.data}
      </span>
      </div>
    </div>
  );
};

export default admin_data_card;
