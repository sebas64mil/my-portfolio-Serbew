import * as THREE from 'three';

/**
 * Crea un ShaderMaterial de WebGL personalizado para renderizar mallas (wireframe) de alta calidad.
 * Si detecta que es una cara cuadrangular, oculta la diagonal interna y solo dibuja los bordes exteriores.
 * @param {string|THREE.Color} colorHex - Color base de la malla.
 * @param {number} thickness - Grosor de la línea en píxeles de pantalla.
 * @returns {THREE.ShaderMaterial}
 */
export function createWireframeMaterial(colorHex = '#00f0ff', thickness = 1.5) {
  const vertexShader = `
    attribute vec3 aBarycentric;
    varying vec3 vBarycentric;
    varying vec3 vModelPosition;
    varying vec3 vWorldPosition;

    void main() {
      vBarycentric = aBarycentric;
      vModelPosition = position;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vBarycentric;
    varying vec3 vModelPosition;
    varying vec3 vWorldPosition;

    uniform vec3 uColor;
    uniform float uThickness;
    uniform float uTime;
    uniform vec2 uMouse;

    // Calcula la cercanía a un borde. 
    // Si vBarycentric.z es < -0.5, se asume que es una cara cuadrangular y se oculta la diagonal.
    float edgeFactor() {
      if (vBarycentric.z < -0.5) {
        // Cálculo para caras cuadrangulares (Quads) - Oculta la diagonal
        vec2 d = fwidth(vBarycentric.xy);
        vec2 border = min(vBarycentric.xy, 1.0 - vBarycentric.xy);
        vec2 a2 = smoothstep(vec2(0.0), d * uThickness, border);
        return min(a2.x, a2.y);
      } else {
        // Soportar triángulos estándar
        vec3 d = fwidth(vBarycentric);
        vec3 a3 = smoothstep(vec3(0.0), d * uThickness, vBarycentric);
        return min(min(a3.x, a3.y), a3.z);
      }
    }

    void main() {
      float factor = edgeFactor();

      // Descartar el píxel si está lejos de los bordes del objeto
      if (factor > 0.98) {
        discard;
      }

      // Pulso de luz animado
      float pulse = 0.5 + 0.5 * sin(vModelPosition.y * 2.5 - uTime * 3.5 + vModelPosition.x * 2.0);
      
      // Brillo interactivo con la posición del mouse
      float mouseDist = distance(vWorldPosition.xy, uMouse * 12.0);
      float glowIntensity = smoothstep(7.0, 0.0, mouseDist);

      vec3 baseColor = mix(uColor, vec3(0.85, 0.3, 1.0), pulse * 0.4); 
      vec3 finalColor = mix(baseColor, vec3(1.0, 1.0, 1.0), glowIntensity * 0.6);

      float alpha = (1.0 - factor) * (0.6 + 0.4 * pulse + glowIntensity * 0.4);

      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(colorHex) },
      uThickness: { value: thickness },
      uMouse: { value: new THREE.Vector2(0, 0) }
    },
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.DoubleSide
  });
}

/**
 * Prepara una BufferGeometry para el shader de malla convirtiéndola a no indexada
 * y añadiendo el atributo de coordenadas baricéntricas. Detecta grupos de 6 vértices
 * (típicos de quads como en BoxGeometry) para ocultar las diagonales.
 * @param {THREE.BufferGeometry} geometry - Geometría original.
 * @returns {THREE.BufferGeometry} Nueva geometría con el atributo aBarycentric.
 */
export function prepareGeometryForWireframe(geometry) {
  const nonIndexed = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  
  const count = nonIndexed.attributes.position.count;
  const barycentric = new Float32Array(count * 3);

  // Si la cantidad de vértices es múltiplo de 6 (ej. BoxGeometry),
  // tratamos cada grupo de 6 vértices como un quad (dos triángulos) para ocultar la diagonal.
  const isQuadBased = count % 6 === 0;

  if (isQuadBased) {
    for (let i = 0; i < count; i += 6) {
      // Triángulo 1
      barycentric[i * 3] = 0.0;
      barycentric[i * 3 + 1] = 0.0;
      barycentric[i * 3 + 2] = -1.0; // Flag para indicar Quad

      barycentric[(i + 1) * 3] = 1.0;
      barycentric[(i + 1) * 3 + 1] = 0.0;
      barycentric[(i + 1) * 3 + 2] = -1.0;

      barycentric[(i + 2) * 3] = 0.0;
      barycentric[(i + 2) * 3 + 1] = 1.0;
      barycentric[(i + 2) * 3 + 2] = -1.0;

      // Triángulo 2
      barycentric[(i + 3) * 3] = 1.0;
      barycentric[(i + 3) * 3 + 1] = 0.0;
      barycentric[(i + 3) * 3 + 2] = -1.0;

      barycentric[(i + 4) * 3] = 1.0;
      barycentric[(i + 4) * 3 + 1] = 1.0;
      barycentric[(i + 4) * 3 + 2] = -1.0;

      barycentric[(i + 5) * 3] = 0.0;
      barycentric[(i + 5) * 3 + 1] = 1.0;
      barycentric[(i + 5) * 3 + 2] = -1.0;
    }
  } else {
    // Triángulos estándar
    for (let i = 0; i < count; i += 3) {
      barycentric[i * 3] = 1.0;
      barycentric[i * 3 + 1] = 0.0;
      barycentric[i * 3 + 2] = 0.0;

      barycentric[(i + 1) * 3] = 0.0;
      barycentric[(i + 1) * 3 + 1] = 1.0;
      barycentric[(i + 1) * 3 + 2] = 0.0;

      barycentric[(i + 2) * 3] = 0.0;
      barycentric[(i + 2) * 3 + 1] = 0.0;
      barycentric[(i + 2) * 3 + 2] = 1.0;
    }
  }

  nonIndexed.setAttribute('aBarycentric', new THREE.BufferAttribute(barycentric, 3));
  return nonIndexed;
}

/**
 * Prepara la geometría de un objeto Mesh y le aplica el ShaderMaterial del wireframe.
 * Si es un Group u Object3D, se aplica recursivamente a todos sus hijos que sean Mesh.
 * @param {THREE.Object3D} object - El objeto Three.js al que se le aplicará el shader.
 * @param {THREE.ShaderMaterial} material - El material de sombreado de malla a asignar.
 */
export function applyWireframeShader(object, material) {
  object.traverse((child) => {
    if (child.isMesh) {
      const oldGeo = child.geometry;
      child.geometry = prepareGeometryForWireframe(oldGeo);
    }
  });
  
  // Asignar el material
  object.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });
}
