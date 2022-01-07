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
import { modelActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";

let Customizer = () => {
  let frontPrintState = useSelector((state) => state.fontImageReducer);
  let modelState= useSelector((state)=>state.modelReducer)
  console.log(frontPrintState, frontDecalActions);
  let dispatch = useDispatch();

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
              let file = e.target.files[0];
              console.log(file);
              let filePath = URL.createObjectURL(file);
              if (filePath) {
                dispatch(frontDecalActions.changeImage(filePath));
              }
            }}
          />
          <label htmlFor="fileElem">
            Select a front print <BsFillFileEarmarkArrowUpFill />
          </label>
          <PrintEditor
            actions={frontDecalActions}
            sizeX={frontPrintState.size_x}
            sizeY={frontPrintState.size_y}
          />
        </div>
        <Divider flexItem />
        <div className="b_print">
          <input
            type="file"
            id="fileElem"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange=""
          />
          <label htmlFor="fileElem">
            Select a back print <BsFillFileEarmarkArrowUpFill />
          </label>
          <PrintEditor />
        </div>
        <Divider flexItem />
        <div className="texture_selector">
          <input
            type="file"
            id="fileElem"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange=""
          />
          <label htmlFor="fileElem">
            Select a texture print <BsFillFileEarmarkArrowUpFill />
          </label>
        </div>
        <Divider flexItem />
        <div className="customizer_actions">
          <button>
            {" "}
            <GrPowerReset /> Reset
          </button>
          <button>
            {" "}
            <BsCartPlusFill /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Customizer;