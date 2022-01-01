import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'
import {useEffect} from 'react'
import * as THREE from "three";
import { useThree } from '@react-three/fiber'

function Hoodie(props) {
    const gltf = useLoader(GLTFLoader, './scene.gltf')
    console.log('hoodies test',gltf.scene.children[0].children[0].children[2].material.color)
    gltf.scene.children[0].children[0].children[2].material.color.set(props.color)
    props.disp ?props.mesh(gltf.scene.children[0].children[0].children[2]):""
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={10} position={[0,-5,0]} />
      </Suspense>
    )
  }

export default Hoodie
