import * as THREE from 'three';
import { Mesh, ShaderMaterial, Vector4 } from "three";
import { basePlanetFragmentShader } from "../shaders/base-planet-shaders";
import { genericVertexShader } from '../shaders/generic-vertex-shader';

export const createBasePlanet = (colorPalette: Array<Vector4>, size:number = 2) => {

  const sphereGeometry = new THREE.SphereGeometry(size, 100, 100);
  const planetMaterial = new ShaderMaterial({
    vertexShader: genericVertexShader(),
    fragmentShader: basePlanetFragmentShader(),
    transparent: false,
    uniforms: {
      color: { value: colorPalette[4] },
      seed: { value: Math.random() * 100 },
    },
  });

  const basePlanet = new Mesh(sphereGeometry, planetMaterial)

  return basePlanet;
}