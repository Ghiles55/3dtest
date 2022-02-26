

const DeleteCard= (props)=>{
    console.log(props.type, props.items)
    console.log(props.items.join('/'))
   let IdList= props.items.join('/')
    const deleteRequest=async()=>{
        let token= JSON.parse(localStorage.getItem("ADMIN_TOKEN"))
        let response= await fetch("http://localhost:950/deleteItems",{
            method:'DELETE',
            headers:{
                Authtoken:token,
                type:props.type,
                IDs: IdList
            }
            // body:JSON.stringify({
            //     IDs: props.items
            // })
        })
        console.log(response.status, response.text)
    }

    return(
        <div style={{
            width:'20rem',
            height:"6rem",
            display:'flex',
            flexDirection:'column',
            boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            justifyContent:'space-around',
            alignItems:'center',
            marginLeft:'1rem',
            borderRadius:'0.375rem'
        }}
        className={`${props.dark? "dark_light":''}`}
        >
        <p> Currently selected items : {props.items.length}</p>
        <button  onClick={deleteRequest} style={{ width:'95%', height:'2rem', backgroundColor:'#D32F2F', borderRadius:'0.375rem'}}> Delete</button>
        </div>
    )
}
export default DeleteCard