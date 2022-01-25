import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Adminheader from "../components/adminHeader";
import { useRouter } from 'next/router'

const orders = () => {
  let [orders, setOrders] = useState([]);
  let [selected, setSelected]= useState([])
 let Router= useRouter()
  let getOrders = async () => {
    try{
      let response = await fetch("http://localhost:780/getOrders", {
        method: "GET",
        headers: {
          Authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
        },
      });
      let data = await response.json();
      console.log(data);
      setOrders(data.orders);

    }catch(e){
      console.log(e)
    }
  };
  useEffect(() => {
    getOrders();
    setInterval(() => {
      getOrders();
    }, 10000);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "phoneNumber", headerName: "phoneNumber", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field:'products',headerName:'Products',width:200},
    { field:'value',headerName:'Value',width:150}
  ];
  let newOrders = orders.map((el) => {
    
    let prices=el.products.map(el=> el.price)
    console.log(prices)
    return {
      id: el._id,
      firstName: el.client.firstName,
      lastName: el.client.lastName,
      phoneNumber: el.client.phoneNumber,
      date: new Date(el.date).toLocaleDateString("fr-FR",{hour:'2-digit',minute:"2-digit",second:"2-digit"}),
      products:`Number of products : ${el.products.length}`,
      value: prices.reduce((a, b) => a + b, 0)
    };
  });
  console.log(newOrders);
  const rows = newOrders;

  return (
      <>
      <Adminheader/>
    <div
      style={{
        width: "95vw",
        height: "80vh",
        marginTop:"5rem",
        padding:"2rem"
      }}
    >
      {orders.length == 0 ? (
        ""
      ) : (
        <DataGrid
        onCellDoubleClick={(params, event) => {
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
            console.log(params,event)
            Router.push({
              pathname: '/orderinfo',
              query: { id: params.id}
          })
          }
        }}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      )}
    </div>
      </>
  );
};

export default orders;
