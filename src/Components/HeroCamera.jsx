import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (!isMobile) {
      easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    } else {
      state.camera.position.set(0, 0, 20);
    }
  });

  return (
    <group ref={group} rotation={isMobile ? [0.1, -Math.PI, 0] : undefined}>
      {children}
    </group>
  );
};

export default HeroCamera;
