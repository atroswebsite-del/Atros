precision highp float;

varying vec3 v_position;
varying vec4 v_color;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5, 0.5));
  float radius = 0.5;
  float edge = 0.1;
  float alpha = 1.0 - 2.0 * smoothstep(radius - edge, radius, dist);
  if(alpha < 0.1)
    discard;
  // gl_FragColor = vec4(0.898, 0.875, 0.855, 1.0);
  gl_FragColor = v_color;
}