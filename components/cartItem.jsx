import Divider from "@mui/material/Divider";
// import { TiDelete } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { cartActions } from "../store";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const CartItem = (props) => {
  let dispatch = useDispatch();
  let cartItemVariants={
    initial:{
      y:'-6rem',
      opacity:0
    },
    fadeIn:{
      y:0,
      opacity:1
    }
  }
  return (
    <>
      <motion.div className="cartItem" variants={cartItemVariants} initial='initial' animate='fadeIn'>
        <div className="itemImg">
          <img
            src={
              props.item ? "/hoodie-svg-avatar.svg" : "/shirt-svg-avatar.svg"
            }
            alt="itemImg"
          />
        </div>
        <div className="cartContent">
          <span>
            {" "}
            {props.item ? "Customized hoodie" : "Customized T-shirt"}
          </span>
          <p
            style={{ color: "#a5a5a5", marginTop: "0.25rem", fontSize: "14px" }}
          >
            front print: {props.fPrint ? "Yes" : "None"} / back print :{" "}
            {props.bPrint ? "Yes" : "None"}
          </p>
          <br />
          <span>Unit Price: {props.price} USD</span>
        </div>
        <button
          className="delete_CI"
          onClick={(e) => dispatch(cartActions.removeItem(props.id))}
        >
          {" "}
          <FaTimes />
        </button>
      </motion.div>
    </>
  );
};

export default CartItem;
