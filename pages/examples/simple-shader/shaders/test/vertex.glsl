uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute float aRandom;

uniform vec2 uFrequency;
uniform float uTime;

varying float vRandom;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position.x * 10.0, position.y * 3.0, position.z, 1.0);
  modelPosition.z += sin(modelPosition.x * uFrequency.x / 2.0 + uTime / 2.0) * 0.15; 
  modelPosition.z += cos(modelPosition.y * uFrequency.y + uTime / 2.0) * 0.15;
  // modelPosition.z += aRandom * 0.1;
  
  vec4 viewPosition = viewMatrix * modelPosition; 
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1);

  vRandom = sin(modelPosition.z * 3.0 + uTime * 0.8) * (modelPosition.y * 0.2) + 0.5;
}