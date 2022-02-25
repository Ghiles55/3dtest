import { Formik } from "formik";

import { motion, AnimatePresence } from "framer-motion";
import Input from "../components/input";
import wilayas from "../public/wilayas";
import { useRouter } from "next/router";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid'
// let MotionInput = motion(Input);
import  DarkModeToggle from '../components/darkModeToggle'
import { useSelector } from "react-redux";

let RegisterForm = () => {
  let router = useRouter();
  let [status, setStatus] = useState("");
  let darkMode= useSelector((state)=> state.globalReducer.darkMode)
  let backgroundColor=darkMode?'#121212':'#E4E7EB'
  const validate = (values) => {
    let errors = {};
    if (
      !values.firstName ||
      values.firstName.length < 2 ||
      values.firstName.length > 15
    ) {
      errors.firstName = "Your name has to be between 2 and 15 characters";
    }
    if (
      !values.lastName ||
      values.lastName.length < 2 ||
      values.lastName.length > 15
    ) {
      errors.lastName = "Your name has to be between 2 and 15 characters";
    }
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
    if (!values.Address || values.Address.length < 6) {
      errors.Address = "Please enter a valid address";
    }
    if (!values.PhoneNumber || values.PhoneNumber.length < 10) {
      errors.PhoneNumber = "Please enter a valid phone number";
    }
    console.log(errors, values.Password, values.Password.length);
    return errors;
  };
  async function registerRequest(values, actions) {
    try {
      let response = await fetch("http://localhost:950/register", {
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
        router.push("/login");
      } else {
        setStatus(data.status);
        console.log(data, status)
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleClose= ()=>{
    setStatus("")
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
       when: "beforeChildren"
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
  const cardVariants={
    initial:{
      y:10,
      opacity:0
    },
    fadeIn:{
      y:0 ,
      opacity: 1
    }
  }
  const errorsVariants={
initial:{
  y:-5,
  opacity:0
},
animate:{
  y:0,
  opacity:1
},
exit:{
  y:-5,
  opacity:0
}
  }
  return (
    <div style={{ height:'100vh', width:'100vw', backgroundColor:backgroundColor}}>

    <motion.div className="background"  variants={containerVariants} initial='initial' animate='fadeIn' exit="exit">
   <motion.div
        style={{position:'absolute', top:"2rem", right:'2rem', zIndex:10 }}
        >
          <DarkModeToggle/>
        </motion.div>
    <div className={`center_container ${darkMode? "dark_dark": ""}`}  >
     
      <div className={`register_side_banner ${darkMode? "dark_secondary":''}`}>
        <img style={{ height:"100%", width:'90%'}} src='/undraw_2.svg'/>
      </div>
      <motion.div className={`register_card ${darkMode? "dark_dark": ""}`} variants={cardVariants} >
        <div style={ {display:'flex', flexDirection:'column', width:'100%', height:"80%"}}>
        <p style={{fontSize: '3rem', fontWeight: 600, fontFamily:'Raleway' }}>Sign Up !</p>
        <p style={{ marginTop:'0.5rem', marginLeft:'0.5rem'}}> First tell us a bit about yourself</p>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            Password: "",
            Address: "",
            PhoneNumber: "",
          }}
          validate={validate}
          onSubmit={(values, actions) => {
            console.log(values, actions);
            registerRequest(values, actions);
          }}
        >
          {(formik) => (
            <form id="register" onSubmit={formik.handleSubmit}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:'center'
                }}
              >
                <div style={{ width: "50%", padding:'1rem' }}>
                  <AnimatePresence>
                    
                  <Input
                    label="First name"
                    id="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    dark={darkMode}
                  />
                  {/* <div>{formik.errors.firstName?formik.errors.firstName:null}</div> */}
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <motion.div variants={errorsVariants} initial='initial' animate='animate' exit={{ y:-5, opacity: 0}}  className="form_error">{formik.errors.firstName}</motion.div>
                  ) : null}

                  <Input
                    label="Email address"
                    id="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    dark={darkMode}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <motion.div variants={errorsVariants} initial='initial' animate='animate' exit='exit' className="form_error">{formik.errors.email}</motion.div>
                  ) : null}
                  <div>
                    <Input
                      label="Address"
                      id="Address"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      dark={darkMode}
                    />
                    {formik.errors.Address && formik.touched.Address ? (
                      <div className="form_error">{formik.errors.Address}</div>
                    ) : null}
                    <select
                      id="region_select"
                      defaultValue="Region"
                      name="region"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${darkMode? "dark_lighter": ""}`}
                    >
                      <option value="" disabled selected hidden>
                        Region
                      </option>
                      {wilayas.map((el) => (
                        <option value={el.name}>{el.name}</option>
                      ))}
                    </select>
                  </div>
                  </AnimatePresence>
                </div>
                <div style={{ width: "50%",padding:'1rem' }}>
                  <Input
                    label="Last name"
                    id="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    dark={darkMode}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="form_error"> {formik.errors.lastName}</div>
                  ) : null}
                  <Input
                    label="Password"
                    id="Password"
                    type="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    dark={darkMode}
                  />
                  {formik.errors.Password && formik.touched.Password ? (
                    <div className="form_error">{formik.errors.Password}</div>
                  ) : null}
                  <Input
                    label="Phone Number"
                    id="PhoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    dark={darkMode}
                  />
                  {formik.errors.PhoneNumber && formik.touched.PhoneNumber ? (
                    <div className="form_error">
                      {formik.errors.PhoneNumber}
                    </div>
                  ) : null}
                </div>
              </div>
              <button type="submit" className={`login_btn ${darkMode? "dark_secondary": ""}`} style={{ width:'20rem'}}>
                Create an account
              </button>
              <p className="login_bottom_action">
                    Already have an account ?  
                    <Link href="/login"> Login instead !</Link>{" "}
                  </p>
            </form>
          )}
        </Formik>
        </div>
        <Snackbar open={status?true:false} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {status}
        </Alert>
      </Snackbar>

      </motion.div>
    </div>
    </motion.div>
    </div>
  );
};

export default RegisterForm;
