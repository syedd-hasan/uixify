// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} />;
// }

// export default function SplineModel() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       {/* <Model url="../assets/logos/3d-logo.gltf" /> */}
//       <Model url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode" />
//       <OrbitControls />
//     </Canvas>
//   );
// }

// import React from "react";

// const SplineModel = () => {
//   return (
//     <div style={{ width: "100%", height: "500px" }}>
//       <iframe
//         src="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
//         frameBorder="0"
//         width="100%"
//         height="100%"
//         title="3D Model"
//       ></iframe>
//     </div>
//   );
// };

// export default SplineModel;

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LogoModel = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url); // Load the GLTF model

  return <primitive object={gltf.scene} />;
};

const SplineCanvas = () => {
  return (
    <Canvas style={{ width: "100%", height: "500px" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <LogoModel url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.gltf" />
      <OrbitControls />
    </Canvas>
  );
};

export default SplineCanvas;
