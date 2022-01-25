import React from "react";
import Adminheader from "../components/adminHeader";
import { useRouter } from "next/router";
import ProductCard from "../components/productCard";
import { useState,useEffect } from "react";

const orderinfo = () => {
  let router = useRouter();
  let id = router.query.id;
  let [order, setOrder]= useState('')

  useEffect(async() => {
    let response= await fetch("http://localhost:780/getOrders",{
      method:'GET',
      headers:{
        Authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
        ID:id
      }
    })
    let data= await response.json()
    console.log(data)
    setOrder(data)
    
  }, []);
  
  console.log(router.query);

  return (
    <>
    <Adminheader/>
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
            Order ID: {id}
          </h1>
        </div>
        <div style={{
          marginTop:"2rem",
          height:"15rem",
          width:'100%'
        }}>
          <h1>Products :</h1>
          {}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default orderinfo;
