

const Productcard=(props)=>{

    return(
        <div style={{
            height:'10rem',
            width:"8rem",
            display:"flex",
            padding:"0.5rem"
        }}>
            <div style={{
                height:"10rem",
                width:'4rem'
            }}>
                <span>Model {props.model?"Hoodie":"T-shirt"}</span>
                <span>Size {props.size}</span>
                <span>Color: {props.color}</span>
                <span>Price : {props.price}</span>
            </div>
            <div>
                <span> Front Print: {props.frontPrint.isDecal? "Yes" : "No"}</span>
                {props.frontPrint.isDecal?
                <div>
                    <span>Image: {props.image}</span>
                    <span>Position-X: {props.frontPrint.position_x}</span>
                    <span>Position-y: {props.frontPrint.position_y}</span>
                    <span>Size-x: {props.frontPrint.size_x}</span>
                    <span>Size-y: {props.frontPrint.size_y}</span>
                </div>:''
                }
                {props.backPrint.isDecal?
                <div>
                    <span>Image: {props.image}</span>
                    <span>Position-X: {props.backPrint.position_x}</span>
                    <span>Position-y: {props.backPrint.position_y}</span>
                    <span>Size-x: {props.backPrint.size_x}</span>
                    <span>Size-y: {props.backPrint.size_y}</span>
                </div>:''
                }
            </div>
        </div>
    )
}

export default Productcard