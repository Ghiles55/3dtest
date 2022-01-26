import React from "react";
import Adminheader from "../components/adminHeader";
import { useRouter } from "next/router";
import ProductCard from "../components/productCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const orderinfo = () => {
  let router = useRouter();
  let id = router.query.id;
  let [order, setOrder] = useState([]);
  // let order= useSelector((state)=> state.ordersReducer)
  // console.log(order.activeOrder[0])
  let fetchRequest=async()=>{
    let response = await fetch("http://localhost:830/orderInfo", {
      method: "GET",
      headers: {
        
        Authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
        "ID": id,
      },
      
    });
    let data = await response.json();
    console.log(data.orders[0]);
    setOrder(data.orders[0]);
  }
  useEffect(() => {
    fetchRequest()
//     var myHeaders = new Headers();
// myHeaders.append("Authtoken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k");
// myHeaders.append("ID", "61e864d5b87e4e647cea20c8");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://localhost:830/orderInfo", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
  }, []);

  console.log("QUERY",router.query.id);

  return (
    <>
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
            Order ID: {id}
          </h1>
        </div>
        <h1 style={{
          marginTop:"2rem",
          fontSize:"1.5rem"
        }}>Products :</h1>
        <div
          style={{
            marginTop: "1rem",
            height: "15rem",
            width: "100%",
            display:'flex',
            flexDirection:"row"
          }}
        >
          {order.products?.map(el=><ProductCard item={el} />)}
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default orderinfo;
