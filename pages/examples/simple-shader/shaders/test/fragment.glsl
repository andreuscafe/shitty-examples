precision mediump float;

varying float vRandom;

void main() {
  gl_FragColor = vec4(vRandom, vRandom * 0.6, vRandom + 0.7, 1.0);
}