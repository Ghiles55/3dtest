import React from "react";
import { Divider } from "@mui/material";

export const admin_data_card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "34rem",
        height: "14rem",
        padding: "1rem",
        borderRadius: "0.375rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "4rem",
        }}
      >
        {props.title}
      </span>
      <Divider flexItem />
      <span
        style={{
          fontSize: "4rem",
        }}
      >
        {props.data}
      </span>
    </div>
  );
};

export default admin_data_card;
