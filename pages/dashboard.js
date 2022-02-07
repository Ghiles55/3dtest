import React from "react";
import AdminCard from "../components/admin_data_card";
import { CChart } from "@coreui/react-chartjs";
import Link from "next/link";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import Adminheader from "../components/adminHeader";

export const admin = () => {
  let [userCount, setUserCount] = useState("");
  let [orderNumber, setOrderNumber] = useState("");
  let [ordersToday, setOrdersToday] = useState("");
  let [monthValue, setmonthValue] = useState("");
  let date = new Date();
  console.log(`${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`)

  let userCountFetch = async () => {
    let response = await fetch("http://localhost:840/userCount", {
      method: "GET",
      headers: {
        Authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
      },
    });
    let data = await response.json();

    setUserCount(data.userCount);
  };

  let orderNumberFetch = async () => {
    let response = await fetch("http://localhost:840/getOrders", {
      method: "GET",
      headers: {
        Authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
      },
    });
    let data = await response.json();
    setOrderNumber(data.orders.length);
  };

  let todayOrdersFetch = async () => {
    
    let response = await fetch(
      `http://localhost:840/getOrders?day=${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`,
      {
        method: "GET",
        headers: {
          Authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
        },
      }
    );
    
    console.log(response)
    if(response.status== 300){
      setOrdersToday(0)
    }else{
      let data = await response.json()
      setOrdersToday(data.orders.length)
    }
    
  };
  useEffect(() => {
    orderNumberFetch();
    userCountFetch();
    todayOrdersFetch()
  }, []);

  return (
    <>
      <Adminheader/>
      <div className="admin_main_container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <AdminCard title="Number of Users" data={userCount} />
          <AdminCard title="Number of Orders" data={orderNumber} />
          <AdminCard title="Orders Today" data={ordersToday} />
          <AdminCard title="test title" data="344" />
        </div>
        <div className="admin_chart">
          <CChart
            type="line"
            customTooltips={false}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August", 
                "September",
                "October",
                "November",
                "December"
              ],
              datasets: [
                {
                  label: "Orders",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba(220, 220, 220, 1)",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: "User registrations",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default admin;
