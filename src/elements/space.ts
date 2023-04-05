import * as THREE from "three";
import { spaceVertexShader, spaceFragmentShader } from "../shaders/space-shaders";

// @ts-ignore
import { spark } from '../assets';

export const createSpace = () => {

  const amount = 1000;
  const radius = 500;

  const sizes = new Float32Array(amount);
  const positions = new Float32Array(amount * 3);

  const vertex = new THREE.Vector3();

  for (let i = 0; i < amount; i++) {
    vertex.x = (Math.random() * 2 - 1) * radius;
    vertex.y = (Math.random() * 2 - 1) * radius;
    vertex.z = (Math.random() * 2 - 1) * radius;
    vertex.toArray(positions, i * 3);
    sizes[i] = 10;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      pointTexture: { value: new THREE.TextureLoader().load(spark) }
    },
    vertexShader: spaceVertexShader(),
    fragmentShader: spaceFragmentShader(),
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: false
  });

  return new THREE.Points(geometry, material);
}