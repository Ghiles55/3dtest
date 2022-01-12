import Divider from "@mui/material/Divider";

const CartItem= (props)=>{
    return(
        <>
        <Divider flexItem/>
        <div className="cartItem">
            <div className="itemImg">
                <img src="" alt="itemImg" />
            </div>
            <div className="cartContent">
                <span>{props.item?"Customized hoodie":"Customized T-shirt"}</span>
                <span>{props.price}</span>
            </div>
        </div>
        </>
    )
}

export default CartItem