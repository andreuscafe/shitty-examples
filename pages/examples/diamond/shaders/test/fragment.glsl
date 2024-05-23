precision mediump float;

varying vec2 vRandom;

void main() {
  vec4 red = mix(vec4(1.0, 0.0, 0.5, 1.0), vec4(1.0, 0.0, 0.4, 1.0), ((vRandom.x + vRandom.y) * 0.6));
  
  gl_FragColor = mix(red, vec4(1.0, 0.9, 0.9, 1.0), ((vRandom.x + vRandom.y) * 0.6));
  // gl_FragColor = red;
}