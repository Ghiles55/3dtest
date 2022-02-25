import Adminheader from "../components/adminHeader";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const clients = () => {
  let [users, setUsers] = useState([]);
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  let gridStyle= darkMode ? { color: 'white'} : ''
  let getUsers = async (token) => {
    let response = await fetch("http://localhost:950/getuserlist", {
      method: "GET",
      headers: {
        Authtoken:
        token
      },
    });
    let data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("ADMIN_TOKEN"));
    getUsers(token);
    setInterval(() => {
      getUsers();
    }, 10000);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "email", headerName: "Email address", width: 250 },
    { field: "phoneNumber", headerName: "PhoneNumber", width: 130 },
  ];

  const rows = users;

  return (
    <>
      <div
        style={{ height: "100vw", width: "100vw", zIndex: "-5", position:'absolute', top:0 }}
        className={`${darkMode ? "dark_dark" : ""}`}
      >
        <Adminheader />
        <div
          style={{
            width: "95vw",
            height: "80vh",
            marginTop: "5rem",
            padding: "2rem",
          }}
        >
          {users.length == 0 ? (
            ""
          ) : (
            <DataGrid
              onCellDoubleClick={(params, event) => {
                if (!event.ctrlKey) {
                  event.defaultMuiPrevented = true;
                  console.log(params, event);
                }
              }}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              sx={ gridStyle}
              // checkboxSelection
            />
          )}
        </div>
      </div>
    </>
  );
};

export default clients;
