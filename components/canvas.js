import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Suspense, useState, useReducer } from "react";
import Decal from "./Decal";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../store/index";
import { frontDecalActions } from "../store/index";
import { backDecalActions } from "../store/index";
import Model from "./Model";

function Canva(props) {
  let [mesh, setMesh] = useState("");
  let [display, setDisplay] = useState(false);
  // let [scene, setScene] = useState("");
  let fileInput = useRef();
  let [files, setFiles] = useState("/sharingan.png");
  let [model, setModel] = useState(false);
  let [test, setTest] = useState(false);
  let frontDecalState = useSelector((state) => state.fontImageReducer);
  let modelState = useSelector((state) => state.modelReducer);
  let backDecalState = useSelector((state) => state.backImageReducer);
  let dispatch = useDispatch();

  console.log(frontDecalState, backDecalState);

  return (
    <>
      <div id="canvas-container" style={{ height: "100vh", width: "50vw" }}>
        <Canvas camera={{ fov: 60 }}>
          <Provider store={store}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
            />

            <ambientLight intensity={0.1} />
            <directionalLight
              color="white"
              position={[0, -2, 5]}
              intensity={0.2}
            />
            <directionalLight
              color="white"
              position={[0, 2, -5]}
              intensity={0.2}
            />
            <directionalLight
              color="white"
              position={[0, -2, 0]}
              intensity={0.2}
            />
            <directionalLight
              color="white"
              position={[0, 2, 0]}
              intensity={0.2}
            />
            <color attach={"background"} args={["#03544e"]} />

            <Suspense fallback={null}>
              {/* {model && (
                <Newhoodie
                  position={[0, 0, 0]}
                  mesh={setMesh}
                  disp={display}
                  color={props.color}
                  scene={setScene}
                  model={model}
                />
              )}
              {!model && <Shirt mesh={setMesh} color={props.color} model={model} />} */}
              <Model
                mesh={setMesh}
                color={modelState.color}
                model={modelState.model}
                texture={modelState.texture}
                test={test}
              />
              {frontDecalState.isDecal && (
                <Decal
                  mesh={mesh}
                  disp={display}
                  img={files}
                  model={model}
                  pos={0.4}
                  state={frontDecalState}
                  actions={frontDecalActions}
                />
              )}
              {backDecalState.isDecal && (
                <Decal
                  mesh={mesh}
                  disp={display}
                  img={files}
                  model={model}
                  pos={-1}
                  state={backDecalState}
                  actions={backDecalActions}
                />
              )}
              {/* {display && <Decal mesh={mesh} disp={display} img={files} model={model} pos={-1} />} */}
            </Suspense>
          </Provider>
        </Canvas>
      </div>
      <button onClick={(e) => setDisplay(!display)}>decal</button>
      <button
        onClick={(e) => {
          setModel(!model);
          setTest(!test);
        }}
      >
        model
      </button>
      <button
        onClick={(e) => {
          console.log(JSON.stringify(scene.toJSON()));
        }}
      >
        Save
      </button>
      <input
        type="file"
        id="filepicker"
        accept=".png,.jpg,.jpeg"
        ref={fileInput}
        onChange={(e) => {
          let file = fileInput.current.files[0];
          let filePath = URL.createObjectURL(file);
          dispatch(frontDecalActions.changeImage(filePath));
          console.log("WWWWWWWWWW", test);
          if (filePath) setFiles(filePath);
        }}
      />
    </>
  );
}

export default Canva;
