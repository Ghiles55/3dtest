import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Suspense, useState, useReducer } from "react";
import Decal from "../components/Decal";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../store/index";
import { frontDecalActions } from "../store/index";
import { backDecalActions } from "../store/index";
import Model from "../components/Model";

function Canva(props) {
  let [mesh, setMesh] = useState("");
  
  
  
//   let [files, setFiles] = useState("/sharingan.png");
//   let [model, setModel] = useState(false);
//   let [test, setTest] = useState(false);
//   let frontDecalState = useSelector((state) => state.fontImageReducer);
//   let modelState = useSelector((state) => state.modelReducer);
//   let backDecalState = useSelector((state) => state.backImageReducer);
  let activeItem= useSelector((state)=> state.itemsPreviewReducer)
  let dispatch = useDispatch();

  console.log(activeItem);

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

            <ambientLight intensity={0.05} />
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
                color={activeItem.selectedArticle.color}
                model={activeItem.selectedArticle.model}
                // texture={modelState.texture}
                // test={test}
              />
              {activeItem.selectedArticle.frontPrint.isDecal && mesh? (
                <Decal
                  mesh={mesh}
                //   disp={display}
                  img={activeItem.frontImage}
                //   model={model}
                  pos={0.4}
                  state={activeItem.selectedArticle.frontPrint}
                //   actions={frontDecalActions}
                />
              ):null}
              {activeItem.selectedArticle.backPrint.isDecal && mesh? (
                <Decal
                  mesh={mesh}
                //   disp={display}
                  img={activeItem.backImage}
                //   model={model}
                  pos={-1}
                  state={activeItem.selectedArticle.backPrint}
                //   actions={backDecalActions}
                />
              ):null}
              {/* {display && <Decal mesh={mesh} disp={display} img={files} model={model} pos={-1} />} */}
            </Suspense>
          </Provider>
        </Canvas>
      </div>
      
    </>
  );
}

export default Canva;
