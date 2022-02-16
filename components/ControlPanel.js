import { SliderPicker } from "react-color";
import { FaTshirt } from "react-icons/fa";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { GiHoodie } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import PrintEditor from "./PrintEditor";
import { BsCartPlusFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { frontDecalActions } from "../store/index";
import { cartActions } from "../store/index";
import { modelActions } from "../store/index";
import { backDecalActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import cartState from "../store/cartreducer";
import { motion, AnimatePresence, animate } from "framer-motion";

let Customizer = () => {
  let frontPrintState = useSelector((state) => state.fontImageReducer);
  let modelState= useSelector((state)=>state.modelReducer)
  let backPrintState= useSelector((state)=>state.backImageReducer)
  let darkMode= useSelector((state)=> state.globalReducer.darkMode)
  let [frontImageFile, setfrontImageFile]= useState({})
  let [backImageFile, setbackImageFile]= useState({})
  let cartState = useSelector((state) => state.cartReducer);
  let accentColor=darkMode?'#383f45':'#CBD2D9'
  console.log(frontPrintState, frontDecalActions);
  let dispatch = useDispatch();
  let addToCart=(e)=>{
    let price
    let id= Date.now()
    if(modelState.model){
      price=19.99
      if(frontPrintState.isDecal) price += 2
      if(backPrintState.isDecal) price+= 2
    }else{
      price=15.99
      if(frontPrintState.isDecal) price += 2
      if(backPrintState.isDecal) price+= 2
    }
    let newCartItem={
     ...modelState,
      frontPrint:{
        ...frontPrintState,
        file: `${id}-fontPrint`,
      },
      backPrint:{
        ...backPrintState,
        file: `${id}-backPrint`
      },
      price: price.toFixed(2) ,
      frontFile: {
        file:frontImageFile,
        type:frontImageFile.type
      },
      backFile:{
        file:backImageFile,
        type: backImageFile.type
      },
      id: id
    }
    
    dispatch(cartActions.addItem(newCartItem))
    
  }

  return (
    <div className="custom_container">
      <div className={`customizer ${darkMode? "dark_light":""}`}>
        <div className="model_picker">
          <motion.button animate={!modelState.model?{ backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeModel(false))}>
            T-shirt <FaTshirt />{" "}
          </motion.button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <motion.button  animate={modelState.model?{ backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeModel(true))}>
            Hoodie <GiHoodie />{" "}
          </motion.button>
        </div>
        <Divider flexItem />
        <div className="size_picker">
          <motion.button animate={ modelState.size=="S"?{backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeSize("S"))}>
            S
          </motion.button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <motion.button animate={ modelState.size=="M"?{backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeSize("M"))}>
            M
          </motion.button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <motion.button animate={ modelState.size=="L"?{backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeSize("L"))}>
            L
          </motion.button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <motion.button animate={ modelState.size=="XL"?{backgroundColor:accentColor}:null} onClick={(e) => dispatch(modelActions.changeSize("XL"))}>
            XL
          </motion.button>
        </div>
        <Divider flexItem />
        <div className="color_picker">
          <span>Color:</span>
          <SliderPicker color={modelState.color} onChange={(color,e)=> dispatch(modelActions.changeColor(color.hex))}/>
        </div>
        <Divider flexItem />
        <div className="f_print">
          <input
            type="file"
            id="fileElem"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange={(e) => {
              e.preventDefault()
              let file = e.target.files[0];
              setfrontImageFile(file)
              console.log("ZZZZZZZZZZZZZZZ",file);
              let filePath = URL.createObjectURL(file);
              if (filePath) {
                dispatch(frontDecalActions.changeImage(filePath));
              }
            }}
          />
          <label htmlFor="fileElem">
            Select a front print <BsFillFileEarmarkArrowUpFill />
          </label>
          {frontPrintState.isDecal?
          <PrintEditor
            actions={frontDecalActions}
            sizeX={frontPrintState.size_x}
            sizeY={frontPrintState.size_y}
          />:""
        }
        </div>
        <Divider flexItem />
        <div className="b_print">
          <input
            type="file"
            id="b_print_select"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange={(e) => {
              let file = e.target.files[0];
              setbackImageFile(file)
              console.log(file);
              let filePath = URL.createObjectURL(file);
              if (filePath) {
                dispatch(backDecalActions.changeImage(filePath))
              }
            }}
          />
          <label htmlFor="b_print_select">
            Select a back print <BsFillFileEarmarkArrowUpFill />
          </label>
          {backPrintState.isDecal?
          <PrintEditor actions={backDecalActions}
            sizeX={backPrintState.size_x}
            sizeY={backPrintState.size_y} />:""
          
        }
        </div>
        <Divider flexItem />
        {/* <div className="texture_selector">
          <input
            type="file"
            id="texutre_select"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange={e=>{
              let file = e.target.files[0];
              console.log(file);
              let filePath = URL.createObjectURL(file);
              if (filePath) {
                dispatch(modelActions.setTexture(filePath))
              }
            }}
          />
          <label htmlFor="texutre_select">
            Select a texture print <BsFillFileEarmarkArrowUpFill />
          </label>
        </div> */}
        <div className="customizer_actions">
          <motion.button 
          whileHover={{ scale:1.05}}
          whileTap={{ scale: 0.95}}
          style={{ backgroundColor:'#cbd2d9'}}
          onClick={e=>{
            dispatch(frontDecalActions.resetValues())
            dispatch(modelActions.resetValues())
            dispatch(backDecalActions.resetValues())
          }}>
            {" "}
            <GrPowerReset /> Reset
          </motion.button>
          <motion.button  
          whileHover={{ scale:1.05}}
          whileTap={{ scale: 0.95}}
          onClick={addToCart}>
            {" "}
            <BsCartPlusFill /> Add to cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Customizer;
