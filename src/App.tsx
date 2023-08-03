import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 2, 3] }}>
        <Scene />
      </Canvas>
    </>
  )
}

export default App
