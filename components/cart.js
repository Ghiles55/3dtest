import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { cartActions } from "../store";
import CartItem from "./cartItem";
import { useRouter } from 'next/router'
import { Divider } from "@mui/material";
import { position } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion"


const Cart = () => {
  let cartState = useSelector((state) => state.cartReducer);
  let dispatch = useDispatch();
  console.log(cartState.cartItems);
  let router= useRouter()
  let cartVariants={
    initial:{
      x:'30vw'
    },
    fadeIn:{
      x:0,
      // transition:{
      //   stiffness:'120'
      // }
      transition:{
        when:"beforeChildren"
      }
    },
    exit:{
      x:"30vw"
    }
  }
  let buttonVariants={
    onHover:{
      scale:1.03,
      textShadow:'0px 0px 8px rgb(255,255,255)'
    },
    onClick:{
      scale:0.95
    }
  }
 
  return (
    <>
      {cartState.showCart&& 
      <motion.div
        initial={{
          opacity:0
        }}
        animate={{ opacity:1}}
        transition={{ duration:0.3}}
        className="backDrop"
        onClick={(e) => dispatch(cartActions.toggleCart(false))}
      ></motion.div>
      }
      <AnimatePresence>
      {cartState.showCart&& 
      <motion.div className="cart" variants={cartVariants} initial='initial' animate='fadeIn' exit={{x:"30vw"}}>
        <div className="cartActions">
          <h1 >Your Cart</h1>
          <motion.button animate='fadeIn' onClick={(e) => dispatch(cartActions.toggleCart(false))}>
            <BsArrowRight />
          </motion.button>
        </div>
        <Divider/>
        <div className="itemList">
          {cartState.cartItems.map((el) => (
            <CartItem item={el.model} price={el.price} key={el.id} id={el.id} />
          ))}
        <CartItem item={true} price={15.99} key={121212121} id={12121212} />
        </div>
        <div className="cartTotal">
            <span>Your Total is: </span>
            <p style={{ fontSize:'2.5rem'}}> { parseFloat(cartState.cartItems.reduce((a, b)=> a + b.price,0)).toFixed(2)}</p>
        </div>
            <motion.button variants={buttonVariants} whileHover='onHover' whileTap='onClick' style={{position:'absolute', bottom: "2rem", width:"95%", height:"4rem", backgroundColor:'#1d1c1c', color:'white', borderRadius:'40px', left:'1rem', fontSize:'1rem'}} onClick={()=>{
              router.push('/checkout')
            }}>Checkout</motion.button>
      </motion.div>
      }
      </AnimatePresence>
    </>
  );
};

export default Cart;
