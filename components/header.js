import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./cart";
import { cartActions } from "../store";
import { useRouter } from "next/router";


const Header = (props) => {
    let isLogged= useSelector((state)=> state.loginReducer)
    let cartState= useSelector((state)=>state.cartReducer)
    let dispatch= useDispatch()
    let router= useRouter()
    console.log(router.route)
  return (
    <div className="header">
      <div className="logoContainer">
        <img src="/FF_logo.png"/>
        <span>Brand name</span>
      </div>
      <div className="headerSteps">
       <div className="headerStep">Home</div>
       <div className="headerStep">Customizer</div>
       <div className="headerStep">Checkout</div>
      </div>
      <div className="headerActions">
        {isLogged && (
          <>
            <button>Log Out</button>
            <button className="cartBtn"
            onClick={e=> dispatch(cartActions.toggleCart(true))}
            >
              <BsFillCartFill />
            </button>
          </>
        )}
        {!isLogged && (
            <>
            <button>Sign up</button>
            <button>or login</button>
            </>
        )}
      </div>
        {/* {cartState.showCart&& <Cart/>} */}
        <Cart/>
    </div>
  );
};

export default Header
