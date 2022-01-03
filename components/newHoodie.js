import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'
import {useEffect} from 'react'
import * as THREE from "three";
import { useThree } from '@react-three/fiber'

function Newhoodie(props) {
    const gltf = useLoader(GLTFLoader, './newhoodie/newhoodie.gltf')
    console.log('hoodies test',gltf.scene.children[2].children[0].children[3])
    // gltf.scene.children[2].children[0].children[3].material.color.set(props.color)
    useEffect(() => {
      gltf.scene.children[2].children[0].children[3].material.color.set(props.color)
      
    }, [props.color])
    useEffect(() => {
      props.mesh(gltf.scene.children[2].children[0].children[3])
      
    }, [props.model])
    
    return (
      <Suspense fallback={null}>
        <primitive  object={gltf.scene} scale={10} position={[0,-5,0]} />
      </Suspense>
    )
  }

export default Newhoodie
