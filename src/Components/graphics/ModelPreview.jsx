import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createWireframeMaterial, applyWireframeShader } from './wireframeShaderUtil';

/**
 * Canvas pequeño que muestra un modelo 3D placeholder con el wireframe shader.
 * Se usará en la sección About hasta que se reemplace con el modelo real.
 */
export default function ModelPreview() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Fondo transparente
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 50);
    camera.position.set(0, 0.5, 4);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Material
    const material = createWireframeMaterial('#00f0ff', 1.5);
    materialRef.current = material;

    // Modelo placeholder: Cápsula
    const capsuleGeo = new THREE.CapsuleGeometry(0.8, 1.6, 8, 16);
    const mesh = new THREE.Mesh(capsuleGeo);
    applyWireframeShader(mesh, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (materialRef.current?.uniforms) {
        materialRef.current.uniforms.uTime.value = t;
      }

      if (meshRef.current) {
        meshRef.current.rotation.y = t * 0.4;
        meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      capsuleGeo.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: '300px', touchAction: 'none' }}
    />
  );
}
