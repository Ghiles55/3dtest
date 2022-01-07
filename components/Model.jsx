import { Suspense } from "react";
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
    console.log(props)
  let Path, mesh, scale, position, gltf;
  if (props.model) {
    Path = "./newhoodie/newhoodie.gltf";
  } else {
    Path = "./shirt/untitled.gltf";
  }
  gltf = useLoader(GLTFLoader, Path);

  if (props.model) {
    mesh = gltf.scene.children[2].children[0].children[3];
    console.log(gltf)
    scale = 10;
    position = [0, -5, 0];
  } else {
    mesh = gltf.scene.children[0].children[0].children[0].children[0];
    scale = 0.05;
    position = [0, -1.5, 0];
  }

  mesh.material.color.set(props.color);
  useEffect(() => {
      props.mesh(mesh);
    
  }, [mesh])

  
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={scale} position={position} onUpdate={(self) => self.visible=true} />
    </Suspense>
  );
};

export default Model;
