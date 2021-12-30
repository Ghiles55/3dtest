import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'

function Tshirt(props) {
    const gltf = useLoader(GLTFLoader, './tshirt/scene.gltf')
    console.log(gltf.scene.children[0].children[0].children[0].children[0].children[0])
    gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0].material.color.set(props.color)
    // gltf.scene.children[0].children[0].children[0].children[0].children[0].children[1].material.color.set("blue")
    // gltf.scene.children[0].children[0].children[0].children[0].children[0].children[2].material.color.set("yellow")
    // gltf.scene.children[0].children[0].children[0].children[0].children[0].children[3].material.color.set("black")
    // console.log('hoodies test',gltf.scene.children[0].children[0].children[2].material.color)
    // gltf.scene.children[0].children[0].children[2].material.color.set(props.color)
    // props.disp ?props.mesh(gltf.scene.children[0].children[0].children[2]):""
    props.disp ?props.mesh(gltf.scene.children[0].children[0].children[0].children[0].children[0].children[2]):""
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.18} position={[0,-10,0]} />
      </Suspense>
    )
  }

export default Tshirt