

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
            width:'10rem',
            height:"5rem"
        }}>
        <p> Currently selected items : {props.items.length}</p>
        <button onClick={deleteRequest}> Delete</button>
        </div>
    )
}
export default DeleteCard