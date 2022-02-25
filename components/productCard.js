import Divider from "@mui/material/Divider";
import { display } from "@mui/system";
import { itemsPreviewActions } from "../store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { DarkMode } from "@chakra-ui/react";


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
        }}
        className={props.dark? 'dark_light': ''}
        >
            <div style={{
                display:"flex",
                padding:"0.5rem",
                height:"20rem",
            }}>
            <div style={{
                height:"20rem",
                width:'11rem',
                padding:"0.5rem"
            }}>
                <p>Model {props.item.model?"Hoodie":"T-shirt"}</p><br/>
                <p>Size {props.item.size}</p><br/>
                <p>Color: {props.item.color}</p><br/>
                <p>Price : {props.item.price}</p><br/>
            </div>
                <Divider flexItem orientation="vertical"/>
            <div style={{
                padding:"0.5rem",
                display:"flex",
                flexDirection:"column"
            }}>
                <p> Front print: {props.item.frontPrint.isDecal? "Yes" : "No"}</p><br/>
                {/* {props.item.frontPrint.isDecal?
                <div>
                    <p>Image: {<img src={`http://localhost:920/${props.item.id}-frontPrint.${props.item.frontFile.type=='image/png'?"png":'jpg'}`} style={{width:"22px" }}/>}</p>
                    <p>Position-X: {props.item.frontPrint.position_x}</p><br/>
                    <p>Position-y: {props.item.frontPrint.position_y}</p><br/>
                    <p>Size-x: {props.item.frontPrint.size_x}</p><br/>
                    <p>Size-y: {props.item.frontPrint.size_y}</p><br/>
                </div>:''
                } */}
                    <p> Back print : {props.item.backPrint.isDecal? "Yes" : "No"}</p><br/>
                {/* {props.item.backPrint.isDecal?
                <div>
                    <p>Image: {<img src={`http://localhost:920/${props.item.id}-backPrint.${props.item.backFile.type=='image/png'?"png":'jpg'}`} style={{width:"22px" }}/>}</p><br/>
                    <p>Position-X: {props.item.backPrint.position_x}</p><br/>
                    <p>Position-y: {props.item.backPrint.position_y}</p><br/>
                    <p>Size-x: {props.item.backPrint.size_x}</p><br/>
                    <p>Size-y: {props.item.backPrint.size_y}</p><br/>
                </div>:''
                } */}
            </div>
            </div>
            <button onClick={()=>{
                dispatch(itemsPreviewActions.setActiveItem(props.item))
                {props.item.frontPrint.isDecal?  dispatch(itemsPreviewActions.setFrontImage(`http://localhost:920/${props.item.id}-frontPrint.${props.item.frontFile.type=='image/png'?"png":'jpg'}`)): null}
                {props.item.backPrint.isDecal? dispatch(itemsPreviewActions.setBackImage(`http://localhost:920/${props.item.id}-backPrint.${props.item.backFile.type=='image/png'?"png":'jpg'}`)) : null}
                Router.push('/productPreview')
            }}
            style={{
                position:'absolute',
                right:'50%',
                transform:'translateX(50%)',
                height:'3rem',
                width:'90%',
                backgroundColor:'#146cc4',
                borderRadius:'0.375rem',
                fontSize:'1rem',
                fontWeight:'600',
                color:'white'
            }}
            >
                View 3D item
            </button>
        </div>
    )
}

export default Productcard