import { SliderPicker } from "react-color";
import { FaTshirt } from "react-icons/fa";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { GiHoodie } from "react-icons/gi";
import Divider from '@mui/material/Divider';

let Customizer = () => {
  return (
    <div className="custom_container">
      <div className="customizer">
        <div className="model_picker">
          <button>
            T-shirt <FaTshirt />{" "}
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button>
            Hoodie <GiHoodie />{" "}
          </button>
        </div>
        <Divider  flexItem />
        <div className="size_picker">
          <button>S</button>
          <Divider orientation="vertical" variant="middle"  flexItem />
          <button>M</button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button>L</button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button>XL</button>
        </div>
        <Divider  flexItem />
        <div className="color_picker">
          <span>Color:</span>
          <SliderPicker />
        </div>
        <Divider  flexItem />
        <div className="f_print">
          <input
            type="file"
            id="fileElem"
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            onChange=""
          />
          <label htmlFor="fileElem">
            Select a front print <BsFillFileEarmarkArrowUpFill />
          </label>

        </div>
        <Divider  flexItem />
      </div>
    </div>
  );
};
export default Customizer;
