import { BufferAttribute, BufferGeometry, NormalBlending, PlaneGeometry, Points, ShaderMaterial, Vector3 } from 'three';
import VertexShader from '@/anims/shader/particles.vert';
import FragmentShader from '@/anims/shader/particles.frag';

const GroundWidth = 1.2;
const GroundHeight = 0.5;

export interface PlaneParticleOptions {
  xCount: number;
  yCount: number;
  pointScale?: number;
  pointScaleMax?: number;
  pointScaleMin?: number;
  pointCursorScale?: number;
  pointCursorScaleMax?: number;
  pointCursorScaleMin?: number;
}

export const createPlaneParticle: (options: PlaneParticleOptions) => [Points, ShaderMaterial] = ({ xCount, yCount, pointScale, pointScaleMax, pointScaleMin, pointCursorScale, pointCursorScaleMax, pointCursorScaleMin }) => {

  const particleGeometry = new BufferGeometry();

  // ground geometry
  const groundGeometry = new PlaneGeometry(GroundWidth, GroundHeight, xCount, yCount);
  groundGeometry.rotateX(Math.PI / 5);


  const total_point = groundGeometry.getAttribute("position").count;

  const indices = new Uint16Array(total_point);
  const point_array = new Float32Array(total_point * 3);

  let i = 0;
  let j = 0;

  // create ground point
  point_array.set(groundGeometry.getAttribute("position").array);
  while (i < total_point) {
    indices[j] = j;
    j++;
    i++;
  }


  particleGeometry.setAttribute('a_index', new BufferAttribute(indices, 1, false));
  particleGeometry.setAttribute('position', new BufferAttribute(point_array, 3));


  const particleMaterial = new ShaderMaterial({
    uniforms: {
      'uTotal': { value: total_point },
      'uTime': { value: 0 },
      'uPixelRatio': { value: window.devicePixelRatio },
      'uMouse': { value: new Vector3(999, 999, 0) },
      'uTouch': { value: null },
      'uPScale': { value: pointScale || 3.0 },
      'uPScaleMax': { value: pointScaleMax || 2.0 },
      'uPScaleMin': { value: pointScaleMin || 0.5 },
      'uPScaleCursor': { value: pointCursorScale || 5.0 },
      'uPScaleCursorMax': { value: pointCursorScaleMax || 2.0 },
      'uPScaleCursorMin': { value: pointCursorScaleMin || -0.5 },
    },
    vertexShader: VertexShader,
    fragmentShader: FragmentShader,
    depthTest: true,
    depthWrite: true,
    transparent: true,
    blending: NormalBlending,
    wireframe: false
  })


  const points = new Points(particleGeometry, particleMaterial);

  return [points, particleMaterial];
}