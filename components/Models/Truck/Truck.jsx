import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const Truck = (props) => {
  useGLTF.preload('/models/truck.gltf')
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/truck.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Mesh_body002.geometry}
          material={materials.plastic}
        />
        <mesh
          geometry={nodes.Mesh_body002_1.geometry}
          material={materials.paintGreen}
        />
        <mesh
          geometry={nodes.Mesh_body002_2.geometry}
          material={materials.lightFront}
        />
        <mesh
          geometry={nodes.Mesh_body002_3.geometry}
          material={materials._defaultMat}
        />
        <mesh
          geometry={nodes.Mesh_body002_4.geometry}
          material={materials.window}
        />
        <mesh
          geometry={nodes.Mesh_body002_5.geometry}
          material={materials.lightBack}
        />
        <group position={[-0.35, 0.3, 0.76]} scale={[-1, 1, 1]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[0.35, 0.3, 0.76]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[-0.35, 0.3, -0.86]} scale={[-1, 1, 1]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[0.35, 0.3, -0.86]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
      </group>
    </group>
  )
}

export default Truck

useGLTF.preload('/models/truck.gltf')
