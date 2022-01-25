import Adminheader from "../components/adminHeader";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const clients = () => {
  let [users, setUsers] = useState([]);
  let getUsers = async () => {
    let response = await fetch("http://localhost:780/getuserlist", {
      method: "GET",
      headers: {
        Authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzIjoiYWRtaW4iLCJpYXQiOjE2NDI2MDA3MzF9.nf-ZD37D0oTUZT28TOXKhEzbPsSoSvWWKJj6jKBW13k",
      },
    });
    let data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
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
    <Adminheader/>
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
              console.log(params,event)
            }
          }}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
          />
        )}
      </div>
    </>
  );
};

export default clients;
