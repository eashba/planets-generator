
import { utilityFns } from "./helpers"

export const landmassFragmentShader = () => {
  return `
    varying vec3 pos;
    
    uniform vec4 color1;
    uniform vec4 color2;
    uniform vec4 color3;
    uniform vec4 color4;
    uniform float seed;

    vec3 lightColor = vec3(1.0, 1.0, 1.0);
    float size = 1.0;
    int OCTAVES = 10;
    float land_cutoff = .45;

    ${utilityFns}

    void main() {
      vec3 uv = (floor(pos * 1000.0) / 1000.0) + 0.5; 
      vec3 base_fbm_uv = (pos) * size;

      float fbm1 = fbmVec3(base_fbm_uv);
      float fbm2 = fbmVec3(base_fbm_uv * 2.5 * fbm1);
      float fbm3 = fbmVec3(base_fbm_uv * 3.5 * fbm1);
      float fbm4 = fbmVec3(base_fbm_uv * 4.5 * fbm1);
      float fbm5 = fbmVec3(base_fbm_uv * 5.5 * fbm1);

      vec4 col = color4;

      if (fbm5 < fbm1) {
        col = color4;
      }
      if (fbm4 < fbm1) {
          col = color3;
      }
      if (fbm3 < fbm1) {
          col = color2;
      }
      if (fbm2 < fbm1) {
          col = color1;
      }

      gl_FragColor = vec4(col.rgb, step(land_cutoff, fbm1) * col.a);  
    }
`
}