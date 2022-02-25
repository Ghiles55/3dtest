import { Formik, useFormik } from "formik";
import { motion } from "framer-motion";
import Input from "../components/input";
import { useRouter } from "next/router";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useSelector } from "react-redux";
import  DarkModeToggle from '../components/darkModeToggle'
import { globalActions } from "../store";
import { useDispatch } from "react-redux";

const adminLogin = () => {
  let [loginfailed, setLoginfailed] = useState(false);
  let router = useRouter();
  let [userName, setUserName] = useState("");
  let [passWord, setPassWord] = useState("");
  let dispatch= useDispatch()
  let darkMode= useSelector((state)=> state.globalReducer.darkMode)
  async function login() {
    let response = await fetch("http://localhost:920/adminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userName,
        Password: passWord,
      }),
    });
    let data = await response.json();
    console.log(response.status);
    if (response.status == 200) {
      localStorage.setItem("ADMIN_TOKEN", JSON.stringify(data.token));
      router.push("/dashboard");
      dispatch(globalActions.adminLogIn())
    } else if (response.status == 300) {
      setLoginfailed(true);
    }
  }

  const containerVariants={
    initial:{
      x:'50vw',
      opacity:0
    },
    fadeIn:{
      x:0,
      opacity:1,
      transition:{
        type:'spring',
        damping:18,
        duration:0.2,
        when:'beforeChildren'
      }
    },
    exit:{
      x:"-100vw",
      opacity:0,
      transition:{
        duration:0.3
      }
    }
   }
  

  return (
    <>
      <motion.div className={`center_container_log ${darkMode?'dark_dark':""}`} variants={containerVariants} initial='initial' animate="fadeIn" exit="exit">
      <motion.div
        style={{position:'absolute', top:"2rem", right:'2rem' }}
        >
          <DarkModeToggle/>
        </motion.div>
        <motion.div
          initial={{x:'20rem', y:10, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ delay:0.5}}
          style={{
            position: "absolute",
            width: "40rem",
            height: "8rem",
            top: "5rem",
            right: "50vw",
            transform: "translateX(20rem)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontFamily: "'Raleway', sans-serif;",
              fontSize: "3rem",
              fontWeight: "900",
              marginBottom: "2rem",
            }}
          >
            Administrator Login
          </span>
        </motion.div>
        <motion.div className={`login_card ${darkMode?'dark_light':""}`}>
          <form id="login_form" style={{ width: "100%" }}>
            <div>
              <Input
                label="Username"
                id="username"
                type="text"
                dark={darkMode}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <Input
              label="Password"
              id="Password"
              type="Password"
              dark={darkMode}
              onChange={(e) => setPassWord(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
              className="login_btn"
            >
              Login
            </button>
            {loginfailed ? (
              <Alert severity="error" onClose={() => setLoginfailed(false)}>
                No account found with these ID's
              </Alert>
            ) : null}
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};
export default adminLogin;
