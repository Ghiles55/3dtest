import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { globalActions } from "../store";

const Adminheader = () => {
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  let accentColor = darkMode ? "#383f45" : "#cbd2d9";
  let router = useRouter();
  let dispatch= useDispatch()
  return (
    <div className={`admin_header ${darkMode? "dark_light": ""}`}>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
          height:"100%"
        }}
      >
        <motion.div
        className="admin_header_steps"
          animate={
            router.pathname == "/dashboard"
              ? {
                  backgroundColor: accentColor,
                  borderBottom: "4px solid #00897B",
                }
              : null
          }
        >
          <Link href="/dashboard">Dash Board</Link>
        </motion.div>
        <motion.div
        className="admin_header_steps"
          animate={
            router.pathname == "/orders"
              ? {
                  backgroundColor: accentColor,
                  borderBottom: "4px solid #00897B",
                }
              : null
          }
        >
          <Link href="/orders">Orders</Link>
        </motion.div>
        <motion.div
        className="admin_header_steps"
          animate={
            router.pathname == "/clients"
              ? {
                  backgroundColor: accentColor,
                  borderBottom: "4px solid #00897B",
                }
              : null
          }
        >
          <Link href="/clients">Clients</Link>
        </motion.div>
      </div>
      <div style={{ marginRight: "2rem" }}>
        <motion.button
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#eae9ee",
            borderRadius: "40px",
            height: "2rem",
            width: "6rem",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "rgb(255, 94, 94)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            localStorage.removeItem("ADMIN_TOKEN");
            router.push("/admin");
            dispatch(globalActions.adminlogOut())
          }}
        >
          Log Out
        </motion.button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Adminheader;
