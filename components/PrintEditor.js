import Slider from "@mui/material/Slider";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import {FaArrowRight,FaArrowUp,FaArrowDown,FaArrowLeft } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import {motion} from 'framer-motion'

const PrintEditor = (props) => {
  console.log(props);
  let dispatch = useDispatch();
  
  return (
    <div className="printEditorContainer">
      <div className="PrintSizeEditor">
        <span>Size:</span>
        <Slider
          defaultValue={1}
          min={0.2}
          max={5}
          step={0.1}
          aria-label="Width"
          valueLabelDisplay="auto"
          onChangeCommitted={(event, value) =>
            dispatch(props.actions.changeSizeX(value))
          }
        />
        <Slider
          defaultValue={1}
          min={0.2}
          max={1.5}
          step={0.1}
          aria-label="Height"
          valueLabelDisplay="auto"
          onChangeCommitted={(event, value) =>
            dispatch(props.actions.changeSizeY(value))
          }
        />
      </div>
      <motion.div className="PrintPositionEditor">
        <span>Position:</span>
        <br />
        <motion.button
          whileHover={{ scale:1.2}}
          whileTap={{ scale: 0.9}}
          initial={{ translateX: "38px"}}
          id="up_arrow"
          onClick={(e) => dispatch(props.actions.changePositionY(0.1))}
        >
          <FaArrowUp />
        </motion.button>
        <br />
        <motion.button
        whileHover={{ scale:1.2}}
        whileTap={{ scale: 0.9}}
        initial={{ translateX: "16px"}}
          id="left_arrow"
          onClick={(e) => dispatch(props.actions.changePositionX(-0.1))}
        >
          <FaArrowLeft />
        </motion.button>
        <motion.button
        whileHover={{ scale:1.2}}
        whileTap={{ scale: 0.9}}
        initial={{ translateX: "28px"}}
          id="right_arrow"
          onClick={(e) => dispatch(props.actions.changePositionX(0.1))}
        >
          <FaArrowRight />
        </motion.button>
        <br />
        <motion.button
        whileHover={{ scale:1.2}}
        whileTap={{ scale: 0.9}}
        initial={{ translateX: "38px"}}
          id="down_arrow"
          onClick={(e) => dispatch(props.actions.changePositionY(-0.1))}
        >
          <FaArrowDown />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PrintEditor;
