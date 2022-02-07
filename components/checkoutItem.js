import { height } from "@mui/system"
import { Divider } from "@mui/material"

const CheckoutItem=(props)=>{
    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:"100%",
            height:'6rem',
            padding:'1rem',
           justifyContent:'space-around',
           alignItems:'center'
        }}>

        <div style={{
            width:'15%',
            height:"100%"
        }}>
            <img src={props.model? "/hoodie-svg-avatar.svg":"/shirt-svg-avatar.svg"} style={{ width:"100%", height:"100%"}}/>
           
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'60%',
            
        }}>
        <div>
            <p style={{fontWeight:'600' }}>{props.model?"Customized Hoodie":"Customized T-shirt"}</p>
        </div>
        <div style={{ display:'flex', width:'100%', justifyContent:'space-around', paddingTop:'1rem'}}>
            <p style={{color:'#A5A5A5'}}>Size: {props.size}</p>
            <p  style={{color:'#A5A5A5'}}>Front print : {props.frontP? 'Yes':'None'}</p>
            <p  style={{color:'#A5A5A5'}}>back print : {props.backP? 'Yes':'None'}</p>
            {/* <p>Color:</p> */}

        </div>
             {/* <span>{props.model?"Customized Hoodie":"Customized T-shirt"}</span>
            <span>Color:<div style={{width:'16px',height:'16px',backgroundColor:props.color, display:'inline-block', marginLeft:'1rem'}}></div></span>
            <span>Size: {props.size}</span> */}
            {/* <span>Front print: {props.frontP?<img style={{height:"16px",width:"16px"}} src={props.frontP}/>:"No"}</span>
            <span>Back print: {props.backP?<img style={{height:"16px",width:"16px"}} src={props.backP}/>:"No"}</span> */}
        </div>
        <Divider orientation="vertical" flexItem/>
            <span>Price: {props.price}</span>
        </div>
    )
}

export default CheckoutItem