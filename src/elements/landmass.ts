import * as THREE from 'three';
import { Mesh, ShaderMaterial, Vector4 } from "three";
import { landmassFragmentShader } from "../shaders/landmass-shaders"
import { genericVertexShader } from '../shaders/generic-vertex-shader';

export const createLandmass = (colorPalette: Array<Vector4>, size: number = 2) => {

  const sphereGeometry = new THREE.SphereGeometry(size, 100, 100);
  const planetMaterial = new ShaderMaterial({
    vertexShader: genericVertexShader(),
    fragmentShader: landmassFragmentShader(),
    transparent: true,
    uniforms: {
      color1: { value: colorPalette[0] },
      color2: { value: colorPalette[1] },
      color3: { value: colorPalette[2] },
      color4: { value: colorPalette[3] },
      color5: { value: colorPalette[4] },
      seed: { value: Math.random() * 10 },
    }
  })

  return new Mesh(sphereGeometry, planetMaterial);
}