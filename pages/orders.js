import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Adminheader from "../components/adminHeader";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ordersActions } from "../store";
import DeleteCard from "../components/deleteCard";


const orders = () => {
  let [orders, setOrders] = useState([]);
  let [selected, setSelected] = useState([]);
  let dispatch= useDispatch()
  let Router = useRouter();
  let getOrders = async () => {
    try {
      let response = await fetch("http://localhost:840/getOrders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
        },
      });
      let data = await response.json();
      console.log(data);
      setOrders(data.orders);
      dispatch(ordersActions.setOrders(data.orders))
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getOrders();
    let interval1= setInterval(() => {
      getOrders();
    }, 10000);
    return () => {
      clearTimeout(interval1);
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "phoneNumber", headerName: "phoneNumber", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "products", headerName: "Products", width: 200 },
    { field: "value", headerName: "Value", width: 150 },
  ];
  let newOrders = orders.map((el) => {
    let prices = el.products.map((el) => el.price);
    return {
      id: el._id,
      firstName: el.client.firstName,
      lastName: el.client.lastName,
      phoneNumber: el.client.phoneNumber,
      date: new Date(el.date).toLocaleDateString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      products: `Number of products : ${el.products.length}`,
      value: prices.reduce((a, b) => a + b, 0),
    };
  });
  console.log(newOrders);
  const rows = newOrders;

  return (
    <>
      <Adminheader />
      <div
        style={{
          width: "95vw",
          height: "80vh",
          marginTop: "5rem",
          padding: "2rem",
        }}
      >
        {orders.length == 0 ? (
          ""
        ) : (
          <DataGrid
          onRowDoubleClick={(params, event) => {
              if (!event.ctrlKey) {
                event.defaultMuiPrevented = true;
                console.log(params.id);

                dispatch(ordersActions.setActiveOrder(params.id))
                Router.push({
                  pathname: "/orderinfo",
                  query: { id: params.id },
                });
              }
            }}
            onSelectionModelChange={(ids)=>{
              console.log(ids)
              setSelected(ids)
            }}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        )}
      </div>
      <DeleteCard items={selected} type="orders"/>
    </>
  );
};

export default orders;
