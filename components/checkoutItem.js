

const CheckoutItem=(props)=>{
    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:"100%",
            height:'8rem',
            padding:'1rem'
        }}>

        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'50%',
            justifyContent:'space-between'
        }}>
            <span>{props.model?"Customized Hoodie":"Customized T-shirt"}</span>
            <span>Color:<div style={{width:'16px',height:'16px',backgroundColor:props.color, display:'inline-block', marginLeft:'1rem'}}></div></span>
            <span>Size: {props.size}</span>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'50%',
            justifyContent:'space-between'
        }}>
            <span>Front print: {props.frontP?<img style={{height:"16px",width:"16px"}} src={props.frontP}/>:"No"}</span>
            <span>Back print: {props.backP?<img style={{height:"16px",width:"16px"}} src={props.backP}/>:"No"}</span>
            <span>Price: {props.price}</span>
        </div>
        </div>
    )
}

export default CheckoutItem