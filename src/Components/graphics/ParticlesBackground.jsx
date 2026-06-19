import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ParticlesBackground({ color = '#00f0ff', count = 300, blur = 3 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.filter = `blur(${blur}px)`;
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorObj = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    function onResize() {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', onResize);

    let rafId;
    const timer = new THREE.Timer();
    function animate(timestamp) {
      timer.update(timestamp);
      const t = timer.getElapsed();
      points.rotation.y = t * 0.02;
      points.rotation.x = Math.sin(t * 0.15) * 0.02;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement) renderer.domElement.remove();
    };
  }, [color, count, blur]);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />;
}
