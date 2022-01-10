import * as THREE from "three";
import { useMemo } from "react";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";
import { TextureLoader, ImageLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useSelector, useDispatch } from "react-redux";

const Decal = ({ mesh, disp, img, pos, state, actions }) => {
  // let image = useSelector(state => state.fontImageReducer.image)
  let dispatch = useDispatch();
  const texture = useMemo(() => useLoader(TextureLoader, state.image));
  console.log(state,actions);
  console.log(texture.image.naturalHeight);
  // dispatch(actions.setSize({size_x:texture.image.naturalWidth/1000,size_y:texture.image.naturalHeight/1000}))
  const decalGeometry = useMemo(() => {
    if (!state.isDecal) return;
    return new DecalGeometry(
      mesh,
      new THREE.Vector3(state.position_x, state.position_y, pos),
      new THREE.Euler(0, 0, 0, "XYZ"),
      new THREE.Vector3(state.size_x, state.size_y, 1)
    );
  }, [mesh, disp, texture, state]);

  return (
    <mesh geometry={decalGeometry}>
      <meshStandardMaterial
        attach="material"
        color="white"
        depthTest="true"
        depthWrite="false"
        polygonOffset="true"
        polygonOffsetFactor={-4}
        map={texture}
        transparent="true"
        onUpdate={(self) => (self.needsUpdate = true)}
      />
    </mesh>
  );
};

export default Decal;
