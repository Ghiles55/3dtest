import * as THREE from "three";
import { useMemo } from "react";
import {DecalGeometry} from 'three/examples/jsm/geometries/DecalGeometry.js'
import { TextureLoader, ImageLoader } from "three";
import { useLoader } from "@react-three/fiber";
import {useSelector, useDispatch} from 'react-redux'

const Decal = ({ mesh,disp,img }) => {
    let test = useSelector(state => state.fontImageReducer.image)
  console.log("TTTTTTTTT",test)
    const texture = useMemo(()=>useLoader(TextureLoader, img));
    console.log(mesh)
    const decalGeometry = useMemo(() => {
        if(!disp) return
        return new DecalGeometry(
            mesh,
            new THREE.Vector3(0, 0.3,0.4),
            new THREE.Euler(0, 0, 0, "XYZ"),
            new THREE.Vector3(1,1,1)
            );
        }, [mesh]);
        
        
    return (
        <mesh geometry={decalGeometry}>
            <meshStandardMaterial attach="material" color="white" depthTest='true' depthWrite='false' polygonOffset='true' polygonOffsetFactor={-4} map={texture} transparent='true'/>
        </mesh>
    );
};

export default Decal




