import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PlaneGeometry } from "three";

const Plane = ({ curve, distance, yHeight }) => {
  const meshRef = useRef();
  const geometryRef = useRef(new PlaneGeometry(5, 5, 20, 20));

  useEffect(() => {
    if (!geometryRef.current) return;
    const pos = geometryRef.current.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, Math.sin(x * curve) * 0.5);  
    }

    pos.needsUpdate = true;  
  }, [curve]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z = distance;  
      meshRef.current.position.y = yHeight;  
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometryRef.current} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="lightblue" wireframe />
    </mesh>
  );
};

export default Plane;
