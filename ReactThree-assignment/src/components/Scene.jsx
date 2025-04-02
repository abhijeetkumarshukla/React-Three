import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Environment } from "@react-three/drei";
import Plane from "./Plane";
import { useState } from "react";

const Scene = ({ settings }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={settings.ambientLight} />
        <directionalLight position={[5, 5, 5]} />
        {settings.grid && <Grid cellSize={10} />}
        <Plane curve={settings.curve} distance={settings.distance} yHeight={settings.yHeight} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};


export default Scene;
