import Link from "next/link";

const Redirect= ()=>{
    return(
        <>
        <div style={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            width:'100vw',
            height:"100vh",
            flexDirection:'column'
        }}>
           <img src="loginSVG.svg"/>
            <p style={{
                fontSize:"3rem",
                fontWeight:'600'
            }}>
                You are not logged in !
            </p><br/>
            <p id='redirect_link'>You need to be logged in to access this content, <Link href='/login'> Sign in now !</Link></p>
        </div>
        </>
    )
}

export default Redirect