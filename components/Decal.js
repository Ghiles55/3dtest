import * as THREE from "three";
import { useMemo } from "react";
import {DecalGeometry} from 'three/examples/jsm/geometries/DecalGeometry.js'
import { TextureLoader, ImageLoader } from "three";
import { useLoader } from "@react-three/fiber";


const Decal = ({ mesh,disp }) => {
    const texture = useMemo(()=>useLoader(TextureLoader, "stars.jpg"));
    console.log(mesh)
    const decalGeometry = useMemo(() => {
        if(!disp) return
        return new DecalGeometry(
            mesh,
            new THREE.Vector3(0, 0.4, 0.6),
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




