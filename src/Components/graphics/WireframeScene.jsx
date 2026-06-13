import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { createWireframeMaterial, applyWireframeShader } from './wireframeShaderUtil';

function WireframeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

    // Keep original base camera to match scene scale
    const baseCamera = { x: 0, y: 13, z: 28 };
    camera.position.set(baseCamera.x, baseCamera.y, baseCamera.z);
    camera.rotation.set(-19.84 * Math.PI / 180, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    let sharedMaterial = null;
    const rotatableMeshes = [];

    // Load GLB
    const loader = new GLTFLoader();
    const url = new URL('../../assets/public/scene.glb', import.meta.url).href;
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene || gltf.scenes[0];
        // Create and apply wireframe shader material
        sharedMaterial = createWireframeMaterial('#00f0ff', 1.6);
        applyWireframeShader(model, sharedMaterial);

        // Prefer targeting specific primitive names (as in the screenshot)
        const rotatableNamePatterns = [/cylinder/i, /dodecahedron/i, /torus/i, /tube/i, /tetrahedron/i, /sphere/i, /cone/i];
        model.traverse((child) => {
          if (!child.isMesh) return;
          const name = child.name || '';

          // If the node name matches one of the target shapes, mark rotatable
          const nameMatch = rotatableNamePatterns.some((rx) => rx.test(name));
          if (nameMatch && !/box/i.test(name)) {
            child.userData._rotSpeed = 0.25 + Math.random() * 0.7;
            rotatableMeshes.push(child);
            return;
          }

          // Fallback: try dimensional detection (in case names are absent)
          const geo = child.geometry;
          if (!geo) return;
          try { geo.computeBoundingBox && geo.computeBoundingBox(); } catch (e) { /* ignore */ }
          const bbox = geo.boundingBox ? geo.boundingBox.clone() : null;

          if (!bbox) {
            child.userData._rotSpeed = 0.3 + Math.random() * 0.6;
            rotatableMeshes.push(child);
            return;
          }

          const size = new THREE.Vector3();
          bbox.getSize(size);
          const max = Math.max(size.x, size.y, size.z);
          const min = Math.min(size.x, size.y, size.z);

          const isPlane = min < max * 0.05; // very thin
          const isCube = (max - min) < max * 0.15; // nearly equal dims

          if (!isPlane && !isCube) {
            child.userData._rotSpeed = 0.2 + Math.random() * 0.8;
            rotatableMeshes.push(child);
          }
        });

        model.position.set(0, 0, 0);
        scene.add(model);
      },
      undefined,
      (err) => console.error('GLTF load error:', err)
    );

    const mouse = new THREE.Vector2(0, 0);

    function onPointerMove(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      // normalized [-1,1]
      mouse.set((x - 0.5) * 2, (0.5 - y) * 2);
      if (sharedMaterial?.uniforms?.uMouse) sharedMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
    }

    window.addEventListener('pointermove', onPointerMove);

    function onResize() {
      const w = mountRef.current.clientWidth || window.innerWidth;
      const h = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener('resize', onResize);
    onResize();

    function animate() {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (sharedMaterial?.uniforms?.uTime) sharedMaterial.uniforms.uTime.value = elapsed;

      // rotate meshes that are not planes/cubes
      for (let i = 0; i < rotatableMeshes.length; i++) {
        const m = rotatableMeshes[i];
        const speed = m.userData._rotSpeed || 0.4;
        m.rotation.y += speed * delta;
        m.rotation.x = Math.sin(elapsed * 0.25 + i) * 0.05;
      }

      // smooth camera follow (subtle)
      const targetX = baseCamera.x + mouse.x * 2.0; // small horizontal move
      const targetY = baseCamera.y + mouse.y * 1.2; // small vertical move
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.06);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.06);
      camera.lookAt(0, 0.8, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.forceContextLoss();
      renderer.domElement && renderer.domElement.remove();
      scene.traverse((o) => {
        if (o.isMesh) {
          o.geometry && o.geometry.dispose();
          if (o.material) {
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default WireframeScene;
