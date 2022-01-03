import * as THREE from "three";
import { useMemo } from "react";
import {DecalGeometry} from 'three/examples/jsm/geometries/DecalGeometry.js'
import { TextureLoader, ImageLoader } from "three";
import { useLoader } from "@react-three/fiber";
import {useSelector, useDispatch} from 'react-redux'

const Decal = ({ mesh,disp,img,pos }) => {
    let image = useSelector(state => state.fontImageReducer.image)
    const texture = useMemo(()=>useLoader(TextureLoader, image));
    const decalGeometry = useMemo(() => {
        if(!disp) return
        return new DecalGeometry(
            mesh,
            new THREE.Vector3(0, 0.3,pos),
            new THREE.Euler(0, 0, 0, "XYZ"),
            new THREE.Vector3(1,1,1)
            );
        }, [mesh,disp]);
        
        
    return (
        <mesh geometry={decalGeometry}>
            <meshStandardMaterial attach="material" color="white" depthTest='true' depthWrite='false' polygonOffset='true' polygonOffsetFactor={-4} map={texture} transparent='true'/>
        </mesh>
    );
};

export default Decal




