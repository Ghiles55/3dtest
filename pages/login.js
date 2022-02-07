import { Formik, useFormik } from "formik";
import { motion } from "framer-motion";
import Input from "../components/input";
import { useRouter } from "next/router";
import Header from "../components/header";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const login = () => {
  let [loginfailed, setLoginfailed] = useState(false);
  let router = useRouter();
  const validate = (values) => {
    let errors = {};
    if (
      !values.email ||
      !values.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.Password || values.Password.length < 6) {
      errors.Password = "Your password must be at least 6 characters";
    } else if (values.Password.search(/\d/) == -1) {
      errors.Password = "Your password must contain at least one number";
    } else if (values.Password.search(/[a-zA-Z]/) == -1) {
      errors.Password = "Your password must contain at least one letter";
    } else if (
      values.Password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1
    ) {
      errors.Password = "You are using a restricted special character";
    }
    return errors;
  };
  async function loginRequest(values, actions) {
    let response = await fetch("http://localhost:840/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    });
    let data = await response.json();
    console.log(response.status);
    if (response.status == 200) {
      localStorage.setItem("TOKEN", JSON.stringify(data.token));
      router.push("/");
    } else if (response.status == 300) {
      setLoginfailed(true);
    }
  }
  return (
    <>
      <div className="center_container_log">
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
            Login to your account
          </span>
          <span> one more step before you can get started !</span>
        </div>
        <div className="login_card">
          <Formik
            initialValues={{ email: "", Password: "" }}
            validate={validate}
            onSubmit={(values, actions) => {
              console.log(values);
              loginRequest(values);
            }}
          >
            {(formik) => (
              <form
                id="login_form"
                onSubmit={formik.handleSubmit}
                style={{ width: "100%" }}
              >
                <div>
                  <Input
                    label="Email address"
                    id="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {/* <div>{formik.errors.email ? formik.errors.email : null}</div> */}
                  {formik.errors.email && formik.touched.email ? (
                    <div className="form_error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <Input
                  label="Password"
                  id="Password"
                  type="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Password && formik.touched.Password ? (
                  <div className="form_error">{formik.errors.Password}</div>
                ) : null}
                <button type="submit" className="login_btn">
                  Login
                </button>

                <div>
                  <p className="login_bottom_action">
                    Dont have an account yet?{" "}
                    <Link href="/register">Create one for free !</Link>{" "}
                  </p>
                </div>
                {loginfailed ? (
                  <Alert severity="error" onClose={() => setLoginfailed(false)}>
                    No account found with these ID's
                  </Alert>
                ) : null}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default login;
