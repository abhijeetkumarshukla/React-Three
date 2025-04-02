import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr";
import Plane from "./Plane";
import { useState } from "react";

const ARView = ({ settings }) => {
  const [arEnabled, setArEnabled] = useState(false);

  return (
    <>
      <button
        onClick={() => setArEnabled((prev) => !prev)}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        {arEnabled ? "Exit AR" : "Enter AR"}
      </button>

   
      <Canvas camera={{ position: [0, 2, 5] }}>
        {arEnabled ? (
          <XR>
            <ambientLight intensity={settings?.ambientLight || 1} />
            <Plane 
              curve={settings?.curve || 0} 
              distance={settings?.distance || 5} 
              yHeight={settings?.yHeight || 1} 
            />
          </XR>
        ) : (
          <ambientLight intensity={0.2} />
        )}
      </Canvas>
    </>
  );
};

export default ARView;
