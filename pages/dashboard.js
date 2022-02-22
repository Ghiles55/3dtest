import React from "react";
import AdminCard from "../components/admin_data_card";
import { CChartLine } from "@coreui/react-chartjs";
import Link from "next/link";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import Adminheader from "../components/adminHeader";

export const admin = () => {
  let [userCount, setUserCount] = useState("");
  let [orderNumber, setOrderNumber] = useState("");
  let [ordersToday, setOrdersToday] = useState("");
  let [monthValue, setmonthValue] = useState("");
  let [graphUsersData, setGraphUsersData] = useState([]);
  let [graphOrdersData, setGraphOrdersData] = useState([]);
  let date = new Date();

  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

  let userCountFetch = async (token) => {
    let response = await fetch("http://localhost:920/userCount", {
      method: "GET",
      headers: {
        Authtoken: token,
      },
    });
    let data = await response.json();

    setUserCount(data.userCount);
  };

  let orderNumberFetch = async (token) => {
    let response = await fetch("http://localhost:920/getOrders", {
      method: "GET",
      headers: {
        Authtoken: token,
      },
    });
    let data = await response.json();
    setOrderNumber(data.orders.length);
  };

  let todayOrdersFetch = async (token) => {
    let response = await fetch(
      `http://localhost:920/getOrders?day=${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`,
      {
        method: "GET",
        headers: {
          Authtoken: token,
        },
      }
    );
    console.log(response);
    if (response.status == 301) {
      setOrdersToday(0);
    } else {
      let data = await response.json();
      setOrdersToday(data.orders.length);
    }
  };

  let graphDataFetch = async (token, year) => {
    let response = await fetch("http://localhost:920/getGraphData", {
      method: "GET",
      headers: {
        Authtoken: token,
        year: year,
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status == 200) {
      setGraphOrdersData(data.ordersByMonth);
      setGraphUsersData(data.usersByMonth);
    }
  };
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("ADMIN_TOKEN"));
    let year = new Date().getFullYear();
    orderNumberFetch(token);
    userCountFetch(token);
    todayOrdersFetch(token);
    graphDataFetch(token, year);
  }, []);

  return (
    <>
      <Adminheader />
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
          <AdminCard
            title="This month's 
turnover "
            data={ordersToday}
          />
        </div>
        <div className="admin_chart">
          <CChartLine
            type="line"
            customTooltips={false}
            options={{ maintainAspectRatio: false }}
            style={{
              width: "90vw",
              height: "480px",
            }}
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
                "December",
              ],
              datasets: [
                {
                  label: "Orders",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba(220, 220, 220, 1)",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: graphOrdersData,
                  fill: 'origin',
                  tension:'0.5'
                },
                {
                  label: "User registrations",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: graphUsersData,
                  fill: 'origin',
                  tension:'0.5'
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
