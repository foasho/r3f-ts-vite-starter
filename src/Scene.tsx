
import React from "react";
import { OrbitControls, Box, GizmoHelper, GizmoViewport } from "@react-three/drei";

interface SceneProps {
  isGizmo?: boolean;
  isOrbit?: boolean;
}
export const Scene = (
  { 
    isGizmo=true,
    isOrbit=true
  }:SceneProps
) => {

  return (
    <>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 10, 3]} intensity={1} />
      <Box rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial attach={"material"} color="orange" />
      </Box>
      {isOrbit && <OrbitControls />}
      {isGizmo &&
        <GizmoHelper alignment="top-right" margin={[75, 75]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
      }
    </>
  )
}