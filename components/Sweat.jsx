import React, { useRef,useMemo } from 'react'
import { useGLTF ,useTexture } from '@react-three/drei'
import { Object3D } from 'three'
import { useLoader } from "@react-three/fiber";
import { TextureLoader, ImageLoader } from "three";
import * as THREE from "three";
import { Vector3 } from 'three';

// let geometry= new THREE.BoxBufferGeometry()
// let material= new THREE.MeshBasicMaterial()


export default function Sweat({ ...props }) {
  const group = useRef()
  // const texture = useMemo(()=>useLoader(TextureLoader, "stars.jpg"));
  const { nodes, materials,scene } = useGLTF('/scene.gltf')
  console.log(scene.children[0].children[0].children[2])
  props.mesh(scene.children[0].children[0].children[2])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.BTN_FABRIC_FRONT_1944972} material-color={props.color}   />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Holes_FRONT_1944945}  material-color={props.color}   />
        <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material}  material-color={'red'}  />
        <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material}  material-color={'red'}   />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material2501413} material-color={props.color} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Material2501423} material-color={props.color} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Rib_wide_FRONT_1944924}material-color={props.color}  />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Straps_FRONT_1944954} material-color={props.color} />
      </group>
        
    </group>
  )
}