import {Suspense} from 'react'
import {useEffect} from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Shirt(props) {
    const gltf = useLoader(GLTFLoader, './shirt/untitled.gltf')
    console.log(gltf.scene.children[0].children[0].children[0].children[0])
    // props.disp ?props.mesh(gltf.scene.children[0].children[0].children[2]):""
    gltf.scene.children[0].children[0].children[0].children[0].material.color.set(props.color)
    useEffect(() => {
      props.mesh(gltf.scene.children[0].children[0].children[0].children[0])
      
    }, [props.mesh])
    
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.05} position={[0,-1.5,0]} />
      </Suspense>
    )
  }

export default Shirt