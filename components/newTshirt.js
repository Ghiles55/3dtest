import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'
import {useEffect} from 'react'

function Tshirtnew(props) {
    const gltf = useLoader(GLTFLoader, './tshirt2/scene.gltf')
    console.log(gltf.scene)
    // props.disp ?props.mesh(gltf.scene.children[0].children[0].children[2]):""
    gltf.scene.children[0].children[0].children[0].children[0].material.color.set("red")
    useEffect(() => {
      props.mesh(gltf.scene.children[0].children[0].children[0].children[1])
      
    }, [props.mesh])
    
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.05} position={[0,-1.5,0]} />
      </Suspense>
    )
  }

export default Tshirtnew