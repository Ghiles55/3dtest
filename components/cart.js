import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { cartActions } from "../store";
import CartItem from "./cartItem";

const Cart = () => {
  let cartState = useSelector((state) => state.cartReducer);
  let dispatch = useDispatch();
  console.log(cartState.cartItems);
  return (
    <>
      <div
        className="backDrop"
        onClick={(e) => dispatch(cartActions.toggleCart(false))}
      ></div>
      <div className="cart">
        <div className="cartActions">
          <h1>Your Cart</h1>
          <button onClick={(e) => dispatch(cartActions.toggleCart(false))}>
            <BsArrowRight />
          </button>
        </div>
        <div className="itemList">
          {cartState.cartItems.map((el) => (
            <CartItem item={el.model} price={el.price} key={el.id} id={el.id} />
          ))}
        </div>
        <div className="cartTotal">
            <span>Your Total is: {cartState.cartItems.reduce((a, b)=> a + b.price,0)}</span>
            <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
