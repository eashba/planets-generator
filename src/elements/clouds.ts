import * as THREE from 'three';
import { Mesh, ShaderMaterial, Vector4 } from "three";
import { cloudFragmentShader } from "../shaders/cloud-shaders"
import { genericVertexShader } from "../shaders/generic-vertex-shader"

export const createClouds = (color: Vector4, size: number = 2) => {

  const randomCloudCover = Math.random() * (.55 - .35) + .35;
  const sphereSize = size + .03
  const sphereGeometry = new THREE.SphereGeometry(sphereSize, 100, 100);
  const planetMaterial = new ShaderMaterial({
    vertexShader: genericVertexShader(),
    fragmentShader: cloudFragmentShader(),
    transparent: true,
    uniforms: {
      cloudColor: { value: color },
      cloudCover: { value: randomCloudCover },
      seed: { value: Math.random() * 10 },
    }
  })

  return new Mesh(sphereGeometry, planetMaterial);
}