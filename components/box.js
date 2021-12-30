import * as THREE from "three";
import { BoxGeometry } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'


let geometry= new THREE.SphereBufferGeometry(1,1,1)
    let material = new THREE.MeshBasicMaterial({color:'red'})
    let mesh= new THREE.Mesh(geometry,material)

function Box(props){
    props.mesh(mesh)
    const {scene}= useThree()
    console.log(scene.toJSON())
    return(
        <primitive object={mesh} position={[0, 0, 0]} />
    )
}

export default Box