import Link from "next/link";

const Adminheader=()=>{
    return(
        <div className="admin_header">
        <div
          style={{
            width: "30%",
            display: "flex",
            padding: "0.5rem",
            justifyContent: "space-around",
          }}
        >
          <Link href="/dashboard">Dash Board</Link>
          <Link href="/clients">Orders</Link>
          <Link href="/orders">Clients</Link>
        </div>
      </div>
    )
}

export default Adminheader