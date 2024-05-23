// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

// attribute vec3 position;
attribute float aRandom;

uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vRandom;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position.x, position.y, position.z, 1.0);
  
  vec4 viewPosition = viewMatrix * modelPosition; 
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  
  vRandom.x = sin(modelPosition.x + uTime * 0.5);
  vRandom.y = sin(modelPosition.y + uTime * 1.8);
}