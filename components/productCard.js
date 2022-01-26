import Divider from "@mui/material/Divider";
import { display } from "@mui/system";

const Productcard=(props)=>{

    return(
        <div style={{
            height:'24rem',
            width:"22rem",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            margin:"0.5rem",
            position:'relative',
            flexDirection:"column"
        }}>
            <div style={{
                display:"flex",
                padding:"0.5rem",
                height:"20rem",
            }}>
            <div style={{
                height:"20rem",
                width:'11rem'
            }}>
                <span>Model {props.item.model?"Hoodie":"T-shirt"}</span><br/>
                <span>Size {props.item.size}</span><br/>
                <span>Color: {props.item.color}</span><br/>
                <span>Price : {props.item.price}</span><br/>
            </div>
                <Divider flexItem orientation="vertical"/>
            <div style={{
                padding:"0.5rem",
                display:"flex",
                flexDirection:"column"
            }}>
                <span> Front print: {props.item.frontPrint.isDecal? "Yes" : "No"}</span>
                {props.item.frontPrint.isDecal?
                <div>
                    <span>Image: {props.item.image}</span>
                    <span>Position-X: {props.item.frontPrint.position_x}</span><br/>
                    <span>Position-y: {props.item.frontPrint.position_y}</span><br/>
                    <span>Size-x: {props.item.frontPrint.size_x}</span><br/>
                    <span>Size-y: {props.item.frontPrint.size_y}</span><br/>
                </div>:''
                }
                    <span> Back print : {props.item.backPrint.isDecal? "Yes" : "No"}</span>
                {props.item.backPrint.isDecal?
                <div>
                    <span>Image: {props.item.image}</span><br/>
                    <span>Position-X: {props.item.backPrint.position_x}</span><br/>
                    <span>Position-y: {props.item.backPrint.position_y}</span><br/>
                    <span>Size-x: {props.item.backPrint.size_x}</span><br/>
                    <span>Size-y: {props.item.backPrint.size_y}</span><br/>
                </div>:''
                }
            </div>
            <button>
                View 3D Item
            </button>
            </div>
        </div>
    )
}

export default Productcard