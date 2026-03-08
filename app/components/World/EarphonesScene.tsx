import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  ContactShadows,
  PresentationControls
} from '@react-three/drei'
import * as THREE from 'three'

// PRE-CARGA
useGLTF.preload("/headphones_airpods_pro/scene.gltf")

function Model({ ...props }: any) {
  const { scene } = useGLTF("/headphones_airpods_pro/scene.gltf")
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material instanceof THREE.MeshStandardMaterial) {
          // Valores estéticos exactos de vaisShop
          child.material.envMapIntensity = 1.2
          child.material.metalness = 0.05
          child.material.roughness = 0.2
        }
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} scale={0.2} position={[0, -1.25, 0]} />
}

const EarphonesScene = () => {
  return (
    <div className="h-full w-full relative">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 25 }}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.8, // Calibrado para evitar el exceso de blanco
          alpha: true 
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = THREE.PCFShadowMap
        }}
      >
        {/* Luces ajustadas para mayor contraste y sombras profundas */}
        <ambientLight intensity={0.3} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.8} 
          castShadow 
        />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 800 }}
            rotation={[0, -0.4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <Model />
          </PresentationControls>

          <ContactShadows 
            position={[0, -0.75, 0]} 
            opacity={0.45} // Sombra más profunda para mayor realismo
            scale={12} 
            blur={2.5} 
            far={4} 
            resolution={512}
          />
          
          <Environment preset="studio" intensity={0.8} />
        </Suspense>

        <OrbitControls 
          makeDefault 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.8} 
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default EarphonesScene;
