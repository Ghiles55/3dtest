import React from "react";
import Adminheader from "../components/adminHeader";
import { useRouter } from "next/router";
import ProductCard from "../components/productCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const orderinfo = () => {
  let router = useRouter();
  let id;
  let [order, setOrder] = useState([]);
  // let order= useSelector((state)=> state.ordersReducer.activeOrder[0])
  let darkMode = useSelector((state) => state.globalReducer.darkMode);

  let fetchRequest = async () => {
    console.log("hello", document.history);
    try {
      let response = await fetch("http://localhost:920/orderInfo", {
        method: "GET",
        headers: {
          Authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
          ID: router?.query?.id,
        },
      });
      let data = await response.json();
      setOrder(data.orders[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    id = router?.query?.id;
    if (id) {
      fetchRequest();
    }
  }, [router, order.length]);

  console.log("QUERY", router.query.id);

  return (
    <>
      <div
        style={{
          height: "100vw",
          width: "100vw",
          zIndex: "-5",
          position: "absolute",
          top: 0,
        }}
        className={`${darkMode ? "dark_dark" : ""}`}
      >
        <Adminheader />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3rem",
            padding: "2rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2rem",
              }}
            >
              Order ID: {order._id}
            </h1>
          </div>
          <h1
            style={{
              marginTop: "2rem",
              fontSize: "1.5rem",
            }}
          >
            Products :
          </h1>
          <div
            style={{
              marginTop: "1rem",
              height: "15rem",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {order?.products?.map((el) => (
              <ProductCard item={el} dark={darkMode} />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default orderinfo;
