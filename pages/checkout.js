import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/checkoutItem";
import Divider from "@mui/material/Divider";
import Header from "../components/header";
import { display, width } from "@mui/system";
import Input from "../components/input";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const checkout = () => {
  let [user, setUser] = useState("");

  let cartState = useSelector((state) => state.cartReducer);
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  console.log(user, cartState);
  let router = useRouter();
  let backgroundColor=darkMode?'#121212':'#E4E7EB'
  const uploadImages = async (id, backFile, frontFile) => {
    let data = new FormData();
    data.append("frontPrint", frontFile);
    data.append("backPrint", backFile);

    let response = await fetch("http://localhost:920/uploadPrint", {
      method: "POST",
      headers: {
        artId: id,
      },
      body: data,
    });
    console.log(response.text());
  };

  const order = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    try {
      let response = await fetch("http://localhost:920/order", {
        method: "POST",
        headers: {
          Authtoken: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartState.cartItems,
        }),
      });
      let data = await response.json();
      console.log(response.status, data);
      if (response.status == 200) {
        router.push("/orderConfirmed");
      }
      cartState.cartItems.map((el) =>
        uploadImages(el.id, el.backFile.file, el.frontFile.file)
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
  let token = JSON.parse(localStorage.getItem("TOKEN"));

    console.log("before fetch");
    fetch("http://localhost:920/getuser", {
      method: "GET",
      headers: {
        Authtoken: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
    console.log("after fetch");
  }, []);

  const containerVariants = {
    initial: {
      x: "50vw",
      opacity: 0,
    },
    fadeIn: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        duration: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  let userCardVariants = {
    initial: {
      x: "-50vw",
      opacity: 0,
    },
    fadeIn: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        duration: 0.2,
      },
    },
  };

  let summaryVariants = {
    initial: {
      x: "50vw",
      opacity: 0,
    },
    fadeIn: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        duration: 0.2,
        when: "beforeChildren",
      },
    },
  };

  let buttonVariants = {
    initial: {
      y: "20rem",
      opacity: 0,
    },
    fadeIn: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    whileTap: {
      scale: 0.95,
    },
    whileHover: {
      scale: 1.03,
    },
  };

  return (
    <>
      <Header />
      {/* <div className="checkout_container">

      <div style={{
        position:'absolute',
        top:'2rem',
        left:'3rem',
        display:'flex',
        flexDirection:'row',
        width:'fit-content'
      }}>
      <p id="checkout_main_text" style={{
        fontSize:'2rem',
        fontWeight:'400'
      }}>
        {" "}
        <p id="checkout_main_text_user" style={{  display:"inline", fontSize:'4rem', fontWeight:'600'}}>{user.firstName}</p>, please verify the delivery infomation before confirming
      </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "60%",
          display: "flex",
          flexDirection: "row",
          backgroundColor:'white',
         padding:'2rem'
        }}
      >
        <div className="checkout_user_info">
          <p style={{
            fontSize:"1.5rem",
            fontWeight:'400'
          }}>Your personnal informations: </p>
          <ul style={{
            listStyle:'none',
            padding:'0',
            width:'80%'
          }}>
            <Divider/>
            <li className="checkout_list_item">First name:  {user.firstName}</li>
            <Divider/>
            <li className="checkout_list_item">Last name:  {user.lastName}</li>
            <Divider/>
            <li className="checkout_list_item">Address:  {user.address}</li>
            <Divider/>
            <li className="checkout_list_item">Region:  {user.region}</li>
            <Divider/>
            <li className="checkout_list_item">Phone number:  {user.phoneNumber}</li>
            <Divider/>
            <li className="checkout_list_item">Email:  {user.email}</li>
            <Divider/>
          </ul>
        </div>
        <Divider orientation="vertical"/>
        <div
          className="checkout_cart_info"
          style={{
            width: "50%",
            overflowY:'auto',
            position:'relative'
          }}
        >
          <ul style={{
            listStyle:'none',
            padding:'0'
          }}>
            {cartState.cartItems.map((el) => (
              
              <li>
                <CheckoutItem
                  model={el.model}
                  size={el.size}
                  color={el.color}
                  price={el.price}
                  frontP={el.frontPrint.image}
                  backP={el.backPrint.image}
                />
                <Divider/>
              </li>
            ))}
          </ul>
          <p style={{
        fontSize:'2rem',
        fontWeight:'600',
        marginLeft:'3rem',
        position:'absolute',
        bottom:0,
        backgroundColor:'white'
      }}>Your total : {cartState.cartItems.reduce((a, b)=> a + b.price,0)}</p>
        </div>
      </div>
      
      <button
        style={{
          position: "absolute",
          right: "50%",
          bottom: "5rem",
          backgroundColor: "blueviolet",
          borderRadius: "0.375rem",
          width: "6rem",
          height: "4rem",
        }}
        onClick={order}
      >
        Confirm Order
      </button>
    </div>
       */}
    <div  style={{ height:'100vh', width:'100vw', backgroundColor:backgroundColor}}>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="fadeIn"
        exit="exit"
        className={`checkout_main_container ${darkMode ? "dark_dark" : ""}`}
      >
        {/* <p style={{
        fontSize:"2rem",
        fontWeight:'600',
      }}>Checkout</p> */}
        <div
          style={{
            height: "90vh",
            width: "55vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            variants={userCardVariants}
            className={`checkout_user_card ${darkMode ? "dark_light" : ""}`}
          >
            <p className="header_text_s">Your Personnal Informations</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "70%",
                marginTop: "2rem",
                marginLeft: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <p className="body_text_b">First name :</p>
                <p className="body_text_b">Last name :</p>
                <p className="body_text_b">Email :</p>
                <p className="body_text_b">Phone number :</p>
                <p className="body_text_b">Delivery address :</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <p className="body_text_b">{user.firstName}</p>
                <p className="body_text_b">{user.lastName}</p>
                <p className="body_text_b">{user.email}</p>
                <p className="body_text_b">{user.phoneNumber}</p>
                <p className="body_text_b">{user.address}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={userCardVariants}
            className={`checkout_payment_card ${darkMode ? "dark_light" : ""}`}
          >
            <p className="header_text_s">Payment Details</p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "60%",
              }}
            >
              <div>
                {/* <p> Credit card number</p> */}
                <Input
                  label="Credit card number"
                  type="tel"
                  maxlength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                  pattern="[0-9\s]{13,19}"
                  dark={darkMode}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  label="CVV"
                  type="tel"
                  placeholder="•  •  •"
                  style={{ width: "8rem" }}
                  dark={darkMode}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  label="Expiration Date"
                  type="month"
                  style={{ width: "8rem" }}
                  dark={darkMode}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={summaryVariants}
          className={`order_summary_card ${darkMode ? "dark_light" : ""}`}
        >
          <p className="header_text_s">Order Summary</p>
          <motion.div
            style={{ marginTop: "2rem", height: "70%", overflowY: "auto" }}
          >
            {cartState.cartItems.map((el) => (
              <CheckoutItem
                model={el.model}
                size={el.size}
                color={el.color}
                price={el.price}
                frontP={el.frontPrint.image}
                backP={el.backPrint.image}
              />
            ))}
            {/* <CheckoutItem
              model={true}
              size={"M"}
              color={"#e6aca8"}
              price={"19.99"}
              frontP={true}
              backP={true}
            /> */}
          </motion.div>
          <Divider flexItem />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "10%",
              justifyContent: "space-between",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {" "}
              Your Total :{" "}
            </p>
            <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>
              {cartState.cartItems.reduce((a, b) => a + Number(b.price), 0) ||
                0}
            </p>
          </div>
          <motion.button
            // initial={{ y:"20rem", opacity:0}}
            // animate={{ y:0, opacity:1}}

            // whileHover={{ scale:1.05}}
            // whileTap={{ scale:0.95}}
            variants={buttonVariants}
            initial="initial"
            animate="fadeIn"
            whileHover="whileHover"
            whileTap="whileTap"
            style={{
              marginTop: "2rem",
              width: "100%",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              backgroundColor: "#0B0A0C",
              borderRadius: "0.375rem",
              height: "3.5rem",
              borderRadius: "40px",
            }}
            onClick={order}
          >
            Confirm Order
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default checkout;
