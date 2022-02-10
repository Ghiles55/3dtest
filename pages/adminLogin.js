import { Formik, useFormik } from "formik";
import { motion } from "framer-motion";
import Input from "../components/input";
import { useRouter } from "next/router";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const adminLogin = () => {
  let [loginfailed, setLoginfailed] = useState(false);
  let router = useRouter();
  let [userName, setUserName] = useState("");
  let [passWord, setPassWord] = useState("");
  async function login() {
    let response = await fetch("http://localhost:880/adminLogin", {
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
    } else if (response.status == 300) {
      setLoginfailed(true);
    }
  }
  return (
    <>
      <div className="center_container">
        <div
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
        </div>
        <div className="login_card">
          <form id="login_form" style={{ width: "100%" }}>
            <div>
              <Input
                label="Username"
                id="username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <Input
              label="Password"
              id="Password"
              type="Password"
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
        </div>
      </div>
    </>
  );
};
export default adminLogin;
