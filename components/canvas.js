import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  SpotLight,
  useTexture,
} from "@react-three/drei";
import Hoodie from "./hoodie";
import { Suspense, useState, useReducer } from "react";
import Sweat from "./Sweat";
import { TextureLoader } from "three";
import Color from "./Color";
import Decal from "./Decal";
import * as THREE from "three";
import Box from "./box";
import Tshirt from "./tshirt";
import Tshirtnew from "./newTshirt";
import Shirt from "./shirttest";



function Canva(props) {
  let meshs = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshBasicMaterial()
  );
  let [mesh, setMesh] = useState(meshs);
  let [display,setDisplay]=useState(false)
  console.log(display)
  console.log("statecheck", mesh);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA",props.model)
  return (
    <>
      <div id="canvas-container" style={{ height: "50vh" }}>
        <Canvas camera={{ fov: 60 }}>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />

          <ambientLight intensity={0.4} />
          <color attach={"background"} args={["#03544e"]} />
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.7}
          />
          <SpotLight position={[10, 15, 10]} angle={0.5} intensity={0.3} />
          <Suspense fallback={null}>
            {/* <Box mesh={setMesh}/> */}
            {props.model&& <Hoodie  position={[0, 0, 0]} mesh={setMesh} disp={display} color={props.color}/>}
            {/* <Sweat mesh={setMesh} scale={10} position={[0, -5, 0]}/> */}
            {/* {!props.model&& <Tshirt position={[0, -5, 0]} color={props.color}  mesh={setMesh} disp={display}/>} */}
            {!props.model&& <Shirt mesh={setMesh} color={props.color}/>}
            {/* {props.model?<Hoodie  position={[0, 0, 0]} mesh={setMesh} disp={display} color={props.color}/>:<Tshirt position={[0, -5, 0]} color={props.color}  mesh={setMesh} disp={display}/>} */}
            {display && <Decal mesh={mesh} disp={display}/>}
            
          </Suspense>

        </Canvas>
      </div>
      <button onClick={e=> setDisplay(!display)}>decal</button>
      <button onClick={e=>{props.setModel(!props.model)}}>model</button>
    </>
  );
}

export default Canva;
