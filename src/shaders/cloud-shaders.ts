
import { utilityFns } from "./helpers"

export const cloudFragmentShader = () => {
  return `
  varying vec3 pos;
    
  uniform float seed;
  uniform vec4 cloudColor;
  uniform float cloudCover; //lower -> more clouds
  
  float size = 1.5;
  int OCTAVES = 4;

  ${utilityFns}

  void main() {
    vec3 uv = (floor(pos * 1000.0) / 1000.0) + 0.5; 
    vec3 base_fbm_uv = (pos) * size;

    float fbm1 = fbmVec3(base_fbm_uv);
    float fbm2 = fbmVec3(base_fbm_uv * 2.5 * fbm1);
    float fbm3 = fbmVec3(base_fbm_uv * 3.5 * fbm1);

    vec4 col;

    if (fbm3 < fbm1) {
        col = cloudColor;
    }
    if (fbm2 < fbm1) {
        col = vec4(0.0,0.0,0.0,0.0); //transparent
    }

    gl_FragColor = vec4(col.rgb, step(cloudCover, fbm1) * col.a);  
  }
`
}