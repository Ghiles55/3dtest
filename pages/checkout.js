import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/checkoutItem";

const checkout = () => {
  let [user, setUser] = useState("");
  let cartState = useSelector((state) => state.cartReducer);

  console.log(user, cartState);
  const order = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    let response = await fetch("http://localhost:830/order", {
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
  };
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));

    console.log("before fetch");
    fetch("http://localhost:830/getuser", {
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
      <span id="checkout_main_text">
        {" "}
        <span id="checkout_main_text_user">{user.firstName}</span>, please
        verify the delivery infomation before confirming
      </span>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="checkout_user_info">
          <ul>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.address}</li>
            <li>{user.region}</li>
            <li>{user.phoneNumber}</li>
          </ul>
        </div>
        <div
          className="checkout_cart_info"
          style={{
            width: "50%",
          }}
        >
          <ul>
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
              </li>
            ))}
          </ul>
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
    </>
  );
};

export default checkout;
