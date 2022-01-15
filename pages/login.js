import { Formik, useFormik } from "formik";

import { motion } from "framer-motion";
import Input from "../components/input";

const login = () => {
  const validate = () => {
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
    if (!values.Password || values.Password < 6) {
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
  };
  async function loginRequest(values, actions) {
    let data = await fetch("http://localhost:780/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    });
    let response = await data.json();
    console.log(response);
  }
  return (
    <div className="center_container">
      <div className="login_card">
        <Formik initialValues={{ email: "", Password: "" }}
        validate={validate}
        onSubmit={(values,actions)=>{
            console.log(values)
            loginRequest(values)
        }}
        >
        {(formik)=>{
            <form id='login_form' onSubmit={formik.handleSubmit}>
                <Input
                label="Email address"
                id="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>{formik.errors.email ? formik.errors.email : null}</div>
              <Input
                label="Password"
                id="Password"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>{formik.errors.Password?formik.errors.Password:null}</div>
            </form>

        }}

        </Formik>
      </div>
    </div>
  );
};
export default login;
