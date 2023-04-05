//Shades the base of the planet one color
export const basePlanetFragmentShader = () => {
  return `
    varying vec3 pos;

    uniform vec4 color;
    uniform float seed;
    
    void main() {
      gl_FragColor = color;
    }
  `
}