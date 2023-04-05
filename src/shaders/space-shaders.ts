
export const spaceVertexShader = () => {
  return `
    varying vec3 pos;
    varying vec3 vColor;

    attribute vec3 customColor;
    attribute float size;
    
    void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
				gl_PointSize = size * ( 300.0 / -mvPosition.z );
				gl_Position = projectionMatrix * mvPosition;
    }
`
}

export const spaceFragmentShader = () => {
  return `
    varying vec3 vColor;

    uniform vec3 color;
    uniform sampler2D pointTexture;

    void main() {
      gl_FragColor = vec4(1.00, 1.00, 1.00, 1.0);
      gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    }
  `
}
