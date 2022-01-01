import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  SpotLight,
  useTexture,
} from "@react-three/drei";
import Hoodie from "./hoodie";
import { Suspense, useState, useReducer } from "react";
import { TextureLoader } from "three";
import Color from "./Color";
import Decal from "./Decal";
import * as THREE from "three";
import Box from "./box";
import Tshirt from "./tshirt";
import Shirt from "./shirttest";
import Newhoodie from "./newHoodie";
import {useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store/index'


function Canva(props) {
  let meshs = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshBasicMaterial()
  );
  let [mesh, setMesh] = useState(meshs);
  let [display,setDisplay]=useState(false)
  let [scene,setScene]=useState("")
  let fileInput=useRef()
  let [files,setFiles]=useState("/sharingan.png")
  console.log(files)
  let test = useSelector(state => state.fontImageReducer.image)
  console.log("TTTTTTTTT",test)

  // console.log("AAAAAAAAAA",fileInput.current.value)
  return (
    <>
      <div id="canvas-container" style={{ height: "50vh" }}>
        <Canvas camera={{ fov: 60 }}>
        <Provider store={store}>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />

          <ambientLight intensity={0.4} />
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.7}
          />
          <Suspense fallback={null}>
            {props.model&& <Newhoodie  position={[0, 0, 0]} mesh={setMesh} disp={display} color={props.color} scene={setScene}/>}
            {!props.model&& <Shirt mesh={setMesh} color={props.color}/>}
            {display && <Decal mesh={mesh} disp={display} img={files}/>}
          </Suspense>
          </Provider>
        </Canvas>
      </div>
      <button onClick={e=> setDisplay(!display)}>decal</button>
      <button onClick={e=>{props.setModel(!props.model)}}>model</button>
      <button onClick={e=>{console.log(JSON.stringify(scene.toJSON()))}}>Save</button>
      <input type="file" id='filepicker' accept=".png,.jpg,.jpeg" ref={fileInput} onChange={e=>{
        let file= fileInput.current.files[0]
        let filePath= URL.createObjectURL(file)
        if(filePath) setFiles(filePath)
        
      }} />
    </>
  );
}

export default Canva;
