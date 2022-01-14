import Divider from "@mui/material/Divider";
import { TiDelete } from "react-icons/ti";
import { cartActions } from "../store";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  let dispatch = useDispatch();
  return (
    <>
      <Divider flexItem />
      <div className="cartItem">
        <div className="itemImg">
          <img src="FF_logo.png" alt="itemImg" />
        </div>
        <div className="cartContent">
          <span>
            {" "}
            Item :{props.item ? "Customized hoodie" : "Customized T-shirt"}
          </span>
          <br />
          <span>Unit Price: {props.price} USD</span>
        </div>
        <button
          className="delete_CI"
          onClick={e=> dispatch(cartActions.removeItem(props.id))}
        >
          {" "}
          <TiDelete />
        </button>
      </div>
    </>
  );
};

export default CartItem;
