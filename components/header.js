import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./cart";
import { cartActions } from "../store";
import { styled } from '@mui/material/styles';
import { globalActions } from "../store";
import { useRouter } from "next/router";
import Switch from '@mui/material/Switch';
import Badge from '@mui/material/Badge';
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from "next/link";

const Header = (props) => {
    let darkMode= useSelector((state)=> state.globalReducer.darkMode)
    console.log(darkMode)
    let cartState= useSelector((state)=>state.cartReducer)
    let dispatch= useDispatch()
    let accentColor=darkMode?'#383f45':"#cbd2d9"
    let router= useRouter()
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: darkMode === true ? '#8796A5' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: darkMode === true ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: darkMode === true ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
      },
    }));
    
    console.log(router.route)
  return (
    <div className={`header ${darkMode? "dark_light": ""}`}>
      <div className="logoContainer">
        <img src="/FF_logo.png"/>
        <span>Brand name</span>
      </div>
      <div className="headerSteps">
       <motion.div className="headerStep"><Link href='/'>Home</Link></motion.div>
       <motion.div animate={router.pathname=='/customiser'? {backgroundColor: accentColor, borderBottom:'4px solid #00897B'} : null } className="headerStep"> <Link href='/customiser'> Customizer </Link></motion.div>
       <motion.div animate={router.pathname=='/checkout'? {backgroundColor: accentColor, borderBottom:'4px solid #00897B'} : null } className="headerStep"> <Link href='/checkout'> Checkout</Link></motion.div>
      </div>
      <div className="headerActions">
            <MaterialUISwitch onChange={ (e)=> dispatch(globalActions.darkModeToggle(e.target.checked))}/>
            <motion.button
            style={{ 
              marginLeft:"2rem",
              marginRight:"2rem",
              fontSize:"1rem",
              fontWeight:"bold",
              backgroundColor:'#eae9ee',
              borderRadius:"40px",
              height:"2rem",
              width:'6rem'
            }}
            whileHover={{ scale:1.1, backgroundColor:"rgb(255, 94, 94)"}}
            whileTap={{ scale:0.9}}
            onClick={ ()=>{
              localStorage.removeItem('TOKEN')
              router.push("/login")
            }}
            >Log Out</motion.button>
            <motion.button className="cartBtn"
            whileHover={{ scale: 1.1}}
            whileTap={{ scale:0.9}}
            onClick={e=> dispatch(cartActions.toggleCart(true))}
            >
              <Badge badgeContent={cartState.cartItems.length} color="primary">
              <BsFillCartFill style={ darkMode? {color :"#00897B"}:""} />
              </Badge>
            </motion.button>
          
        {/* {!isLogged && (
            <>
            <button>Sign up</button>
            <button>or login</button>
            </>
        )} */}
      </div>
        {/* {cartState.showCart&& <Cart/>} */}
        <Cart/>
    </div>
  );
};

export default Header
