import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { cartActions } from "../store";
import CartItem from "./cartItem";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";


const Cart = () => {
  let cartState = useSelector((state) => state.cartReducer);
  let darkMode= useSelector((state)=> state.globalReducer.darkMode)
  let dispatch = useDispatch();
  console.log(cartState.cartItems)
  let router = useRouter();
  console.log(router.pathname);
  let cartVariants = {
    initial: {
      x: "30vw",
    },
    fadeIn: {
      x: 0,
      // transition:{
      //   stiffness:'120'
      // }
      transition: {
        when: "beforeChildren",
      },
    },
    exit: {
      x: "30vw",
    },
  };
  let buttonVariants = {
    onHover: {
      scale: 1.03,
      textShadow: "0px 0px 8px rgb(255,255,255)",
    },
    onClick: {
      scale: 0.95,
    },
  };
  
  return (
    <>
      {cartState.showCart && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="backDrop"
          onClick={(e) => dispatch(cartActions.toggleCart(false))}
        ></motion.div>
      )}
      <AnimatePresence>
        {cartState.showCart && (
          <motion.div
            className={`cart  ${darkMode? "dark_light": ""}`}
            variants={cartVariants}
            initial="initial"
            animate="fadeIn"
            exit={{ x: "30vw" }}
          >
            <div className="cartActions">
              <h1>Your Cart</h1>
              <motion.button
                animate="fadeIn"
                onClick={(e) => dispatch(cartActions.toggleCart(false))}
              >
                <BsArrowRight />
              </motion.button>
            </div>
            <Divider />
            <motion.div className="itemList">
              {cartState.cartItems.length==0 && <img src='/empty_cart_1.png' style={{ marginTop:'50%', marginLeft:'50%', transform:' translateX(-50%) translateY(-50%)' }}/>} 
              {cartState.cartItems.map((el) => (
                <CartItem
                  item={el.model}
                  price={el.price}
                  key={el.id}
                  id={el.id}
                  fPrint={el.frontPrint.isDecal}
                  bPrint={el.backPrint.isDecal}
                  dark={darkMode}
                />
              ))}

              {/* <CartItem
                item={true}
                price={15.99}
                key={121212121}
                id={12121212}
              /> */}
            </motion.div>
            <div className="cartTotal">
              <span>Your Total is: </span>
              <p style={{ fontSize: "2.5rem" }}>
                {" "}
                {
                  cartState.cartItems.reduce((a, b) => a + Number(b.price), 0)
                }
              </p>
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="onHover"
              whileTap="onClick"
              style={{
                position: "absolute",
                bottom: "2rem",
                width: "95%",
                height: "4rem",
                backgroundColor: "#1d1c1c",
                color: "white",
                borderRadius: "40px",
                left: "1rem",
                fontSize: "1rem",
              }}
              onClick={() => {
                router.push("/checkout");
                dispatch(cartActions.toggleCart(false))
              }}
            >
              Checkout
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
