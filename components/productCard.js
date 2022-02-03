import Divider from "@mui/material/Divider";
import { display } from "@mui/system";
import { itemsPreviewActions } from "../store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


const Productcard=(props)=>{
    console.log(props)
    const dispatch= useDispatch()
    const Router= useRouter()
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
                    <span>Image: {<img src={`http://localhost:840/${props.item.id}-frontPrint.${props.item.frontFile.type=='image/png'?"png":'jpg'}`} style={{width:"22px" }}/>}</span>
                    <span>Position-X: {props.item.frontPrint.position_x}</span><br/>
                    <span>Position-y: {props.item.frontPrint.position_y}</span><br/>
                    <span>Size-x: {props.item.frontPrint.size_x}</span><br/>
                    <span>Size-y: {props.item.frontPrint.size_y}</span><br/>
                </div>:''
                }
                    <span> Back print : {props.item.backPrint.isDecal? "Yes" : "No"}</span>
                {props.item.backPrint.isDecal?
                <div>
                    <span>Image: {<img src={`http://localhost:840/${props.item.id}-backPrint.${props.item.backFile.type=='image/png'?"png":'jpg'}`} style={{width:"22px" }}/>}</span><br/>
                    <span>Position-X: {props.item.backPrint.position_x}</span><br/>
                    <span>Position-y: {props.item.backPrint.position_y}</span><br/>
                    <span>Size-x: {props.item.backPrint.size_x}</span><br/>
                    <span>Size-y: {props.item.backPrint.size_y}</span><br/>
                </div>:''
                }
            </div>
            <button onClick={()=>{
                dispatch(itemsPreviewActions.setActiveItem(props.item))
                dispatch(itemsPreviewActions.setFrontImage(`http://localhost:840/${props.item.id}-frontPrint.${props.item.frontFile.type=='image/png'?"png":'jpg'}`))
                dispatch(itemsPreviewActions.setBackImage(`http://localhost:840/${props.item.id}-backPrint.${props.item.backFile.type=='image/png'?"png":'jpg'}`))
                Router.push('/productPreview')
            }}>
                View 3D Item
            </button>
            </div>
        </div>
    )
}

export default Productcard