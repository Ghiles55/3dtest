import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/checkoutItem";
import Divider from "@mui/material/Divider";

const checkout = () => {
  let [user, setUser] = useState("");
  let cartState = useSelector((state) => state.cartReducer);

  console.log(user, cartState);

  const uploadImages= async(id,backFile,frontFile)=>{

    let data= new FormData()
    data.append('frontPrint', frontFile)
    data.append('backPrint',backFile)

    let response= await fetch('http://localhost:840/uploadPrint',{
      method:'POST',
      headers:{
        artId: id
      },
      body:data
    })
    console.log(response.text())
  }


  const order = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    let response = await fetch("http://localhost:840/order", {
      method: "POST",
      headers: {
        Authtoken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
				items:cartState.cartItems,
        
			}),
    });
    let data = await response.json();
    console.log(response.status, data);
    cartState.cartItems.map((el)=> uploadImages(el.id,el.backFile.file,el.frontFile.file))
  };
  
  
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));

    console.log("before fetch");
    fetch("http://localhost:840/getuser", {
      method: "GET",
      headers: {
        Authtoken: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
    console.log("after fetch");
  }, []);

  return (
    <>
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

      <div className="checkout_main_container">
      <p style={{
        fontSize:"2rem",
        fontWeight:'600',
        marginLeft:"2rem"
      }}>Checkout</p>
      <div style={{
        height:'90vh',
        width:'40vw',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
        <div className="checkout_user_card">
        {/* <img src="http://localhost:840/1643725163465-frontPrint.png" style={{ width:"28px"}}/> */}
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
      </div>
      </div>
    </>
  );
};

export default checkout;
