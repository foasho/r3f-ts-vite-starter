
import { OrbitControls, Box } from "@react-three/drei";

export const Scene = () => {

  return (
    <>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 10, 3]} intensity={1} />
      <Box rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial attach={"material"} color="orange" />
      </Box>
      <OrbitControls />
    </>
  )
}