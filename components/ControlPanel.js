import { SliderPicker } from "react-color";
import { FaTshirt } from "react-icons/fa";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { GiHoodie } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import PrintEditor from "./PrintEditor";
import Button from "@mui/material/Button";
import { BsCartPlusFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { frontDecalActions } from "../store/index";
import { cartActions } from "../store/index";
import { modelActions } from "../store/index";
import { backDecalActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import cartState from "../store/cartreducer";

let Customizer = () => {
  let frontPrintState = useSelector((state) => state.fontImageReducer);
  let modelState= useSelector((state)=>state.modelReducer)
  let backPrintState= useSelector((state)=>state.backImageReducer)
  let [frontImageFile, setfrontImageFile]= useState({})
  let [backImageFile, setbackImageFile]= useState({})
  let cartState = useSelector((state) => state.cartReducer);
  console.log(frontPrintState, frontDecalActions);
  let dispatch = useDispatch();
  let addToCart=(e)=>{
    let price
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
        ...frontPrintState
      },
      backPrint:{
        ...backPrintState
      },
      price:price,
      frontFile: frontImageFile,
      backFile: backImageFile,
      id: Date.now()
    }
    
    dispatch(cartActions.addItem(newCartItem))
    
  }

  return (
    <div className="custom_container">
      <div className="customizer">
        <div className="model_picker">
          <button onClick={(e) => dispatch(modelActions.changeModel(false))}>
            T-shirt <FaTshirt />{" "}
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button onClick={(e) => dispatch(modelActions.changeModel(true))}>
            Hoodie <GiHoodie />{" "}
          </button>
        </div>
        <Divider flexItem />
        <div className="size_picker">
          <button onClick={(e) => dispatch(modelActions.changeSize("S"))}>
            S
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button onClick={(e) => dispatch(modelActions.changeSize("M"))}>
            M
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button onClick={(e) => dispatch(modelActions.changeSize("L"))}>
            L
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button onClick={(e) => dispatch(modelActions.changeSize("XL"))}>
            XL
          </button>
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
          <button onClick={e=>{
            dispatch(frontDecalActions.resetValues())
            dispatch(modelActions.resetValues())
            dispatch(backDecalActions.resetValues())
          }}>
            {" "}
            <GrPowerReset /> Reset
          </button>
          <button onClick={addToCart}>
            {" "}
            <BsCartPlusFill /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Customizer;
