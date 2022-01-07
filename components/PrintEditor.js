import Slider from "@mui/material/Slider";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";

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
          max={5}
          step={0.1}
          aria-label="Height"
          valueLabelDisplay="auto"
          onChangeCommitted={(event, value) =>
            dispatch(props.actions.changeSizeY(value))
          }
        />
      </div>
      <div className="PrintPositionEditor">
        <span>Position:</span>
        <br />
        <button
          id="up_arrow"
          onClick={(e) => dispatch(props.actions.changePositionY(0.1))}
        >
          <BsFillArrowUpSquareFill />
        </button>
        <br />
        <button
          id="left_arrow"
          onClick={(e) => dispatch(props.actions.changePositionX(-0.1))}
        >
          <BsFillArrowLeftSquareFill />
        </button>
        <button
          id="right_arrow"
          onClick={(e) => dispatch(props.actions.changePositionX(0.1))}
        >
          <BsFillArrowRightSquareFill />
        </button>
        <br />
        <button
          id="down_arrow"
          onClick={(e) => dispatch(props.actions.changePositionY(-0.1))}
        >
          <BsFillArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
};

export default PrintEditor;
