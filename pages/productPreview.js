import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Suspense, useState, useReducer } from "react";
import Decal from "../components/Decal";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../store/index";
import Model from "../components/Model";
import Divider from "@mui/material/Divider";

function Canva(props) {
  let [mesh, setMesh] = useState("");
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  let activeItem = useSelector((state) => state.itemsPreviewReducer);
  let dispatch = useDispatch();

  console.log(activeItem);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div id="canvas-container" style={{ height: "100vh", width: "60vw" }}>
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
              <color
                attach={"background"}
                args={[`${darkMode ? "#121212" : "#CBD5E0"}`]}
              />

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
                {activeItem.selectedArticle.frontPrint.isDecal && mesh ? (
                  <Decal
                    mesh={mesh}
                    //   disp={display}
                    img={activeItem.frontImage}
                    //   model={model}
                    pos={0.4}
                    state={activeItem.selectedArticle.frontPrint}
                    //   actions={frontDecalActions}
                  />
                ) : null}
                {activeItem.selectedArticle.backPrint.isDecal && mesh ? (
                  <Decal
                    mesh={mesh}
                    //   disp={display}
                    img={activeItem.backImage}
                    //   model={model}
                    pos={-1}
                    state={activeItem.selectedArticle.backPrint}
                    //   actions={backDecalActions}
                  />
                ) : null}
                {/* {display && <Decal mesh={mesh} disp={display} img={files} model={model} pos={-1} />} */}
              </Suspense>
            </Provider>
          </Canvas>
        </div>
        <div className="product_details">
          <p style={{ margin:"2rem", fontSize:"2rem"}}>Product Details:</p>
          <div style={{  display:'flex', justifyContent:'space-between', width:'100%',paddingLeft:"2rem", paddingRight:"2rem", fontSize:'1.25rem'}}>
            <div>
            <p>ID :  </p>
            <p>
              Model :
            </p>
            <p>Size :</p>
            <p> Color : </p>
            </div>
            <div>
            <p> {activeItem.selectedArticle.id} </p>
            <p>
              {activeItem.selectedArticle.model ? "Hoodie" : "T-Shirt"}{" "}
            </p>
            <p> {activeItem.selectedArticle.size}</p>
            <p>  {activeItem.selectedArticle.color}</p>
            </div>
          </div>
          {activeItem.selectedArticle.frontPrint.isDecal ? <div style={{ marginTop:"2rem", fontSize:'1.25rem'}}>
            <p style={{  margin:"2rem", fontSize:"2rem"}}>Front print details :</p>
            <div style={{  display:'flex', justifyContent:'space-between', width:'100%',paddingLeft:"2rem", paddingRight:"2rem"}}>
              <div>
              <p style={{ height:'60px',marginBottom:'0.25rem'}}>Image :</p>
              <p>Size-X: </p>
              <p>Size-Y: </p>
              <p>Position-X :</p>
              <p>Position-Y :</p>
              </div>
              <div>
              <img src={activeItem.frontImage} style={{ height:'60px', marginBottom:'0.25rem'}}/>
              <p> {activeItem.selectedArticle.frontPrint.size_x}</p>
              <p> {activeItem.selectedArticle.frontPrint.size_y}</p>
              <p> {activeItem.selectedArticle.frontPrint.position_x}</p>
              <p> {activeItem.selectedArticle.frontPrint.position_y}</p>
              </div>
            
            </div>


          </div> : null}
          {activeItem.selectedArticle.backPrint.isDecal ? <div style={{ marginTop:"2rem", fontSize:'1.25rem'}}>
            <p style={{  margin:"2rem", fontSize:"2rem"}}>Back print details :</p>
            <div style={{  display:'flex', justifyContent:'space-between', width:'100%',paddingLeft:"2rem", paddingRight:"2rem"}}>
              <div>
              <p style={{ height:'60px',marginBottom:'0.25rem'}}>Image :</p>
              <p>Size-X: </p>
              <p>Size-Y: </p>
              <p>Position-X :</p>
              <p>Position-Y :</p>
              </div>
              <div>
              <img src={activeItem.backImage} style={{ height:'60px', marginBottom:'0.25rem'}}/>
              <p> {activeItem.selectedArticle.backPrint.size_x}</p>
              <p> {activeItem.selectedArticle.backPrint.size_y}</p>
              <p> {activeItem.selectedArticle.backPrint.position_x}</p>
              <p> {activeItem.selectedArticle.backPrint.position_y}</p>
              </div>
            
            </div>

          </div> : null}
        </div>
      </div>
    </>
  );
}

export default Canva;
