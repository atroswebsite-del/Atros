import * as THREE from 'three';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { createPlaneParticle } from './geometry/particles';

function easeOutQuad(t: number): number {
  const x = Math.abs(t);
  return (1 - (1 - x) * (1 - x)) * Math.sign(t);
}

export function createHeroView(container: HTMLElement, isPhone: boolean = false) {
  isPhone = isPhone;

  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xcccccc);
  scene.background = new THREE.Color(0xEAEAEA);

  const renderer = new THREE.WebGLRenderer({ antialias: true, depth: true });
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.maxWidth = '100%';

  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(10, 1, 0.1, 2000);

  camera.position.set(0, 0, window.innerWidth >= 430 ? 10.5 : 18);

  // controls

  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.listenToKeyEvents(window);
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.05;
  // controls.screenSpacePanning = false;
  // controls.maxPolarAngle = Math.PI / 2;



  const clock = new THREE.Clock();

  let renderRect = renderer.domElement.getBoundingClientRect();
  let logo: THREE.Mesh;

  // world
  // const [points] = createTestParticles();
  const [planePoints, pointMaterial] = createPlaneParticle({ xCount: isPhone ? 48 : 65, yCount: isPhone ? 48 : 50 });

  const readViewportHeight = () =>
    window.visualViewport?.height ?? window.innerHeight;

  const updateSize = () => {
    const cw = Math.max(1, Math.floor(container.clientWidth || window.innerWidth));
    const ch = Math.max(
      1,
      Math.floor(container.clientHeight || readViewportHeight()),
    );
    const pr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(cw, ch, false);
    camera.aspect = cw / ch;
    camera.updateProjectionMatrix();
    renderRect = renderer.domElement.getBoundingClientRect();
    pointMaterial.uniforms.uPixelRatio.value = window.devicePixelRatio || 1;
  };

  updateSize();

  const animate = () => {
    const elapse = clock.getDelta();
    pointMaterial.uniforms.uTime.value += elapse;
    //controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    updateSize();
  };

  window.addEventListener('resize', onWindowResize);
  window.visualViewport?.addEventListener('resize', onWindowResize);

  const ro = new ResizeObserver(() => {
    updateSize();
  });
  ro.observe(container);

  const raycaster = new THREE.Raycaster();
  const interactPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1));


  if (!isPhone) {
    renderer.domElement.addEventListener('pointermove', (event) => {
      if (event.isPrimary === false) return;
      const e = event;
      const normalizeX = ((e.clientX - renderRect.left) / renderRect.width) * 2 - 1;
      const normalizeY = -((e.clientY - renderRect.top) / renderRect.height) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(normalizeX, normalizeY), camera);
      const targetPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(interactPlane, targetPoint);
      pointMaterial.uniforms.uMouse.value = targetPoint;

      const rotateX = Math.PI * easeOutQuad(normalizeX) / 8;
      const rotateY = Math.PI * easeOutQuad(normalizeY) / 6;
      const x = 10.0 * Math.sin(rotateX);
      const y = rotateY * 8.0 //camera.position.y;
      const z = 10.0 * Math.cos(rotateX);
      logo.lookAt(new THREE.Vector3(x, y * 0.5, z));
      planePoints.lookAt(new THREE.Vector3(x * 0.5, y * 0.2, z));
    }, { passive: true });
  }

  const loader = new GLTFLoader().setPath('models/')
  loader.load('logo_test.gltf', async (gltf) => {
    const model = gltf.scene;
    await renderer.compileAsync(model, camera, scene);
    logo = model.children[0] as THREE.Mesh;
    // logo.material = new THREE.MeshToonMaterial({ color: 0x212121 });
    logo.material = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7, metalness: 0.0 });
    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(-2, 0, 1);
    logo.position.set(0, 0, 0);
    // logo.position.set(0, 0, 0);
    planePoints.position.set(0, 0, 0.5);
    scene.add(logo);
    scene.add(light);
    // scene.add(logo);
    scene.add(planePoints);
    renderer.setAnimationLoop(animate);
  });

  const updateParams = (params: { pointScale: number, pointScaleMin: number, pointScaleMax: number, pointCursorScale: number, pointCursorScaleMax: number, pointCursorScaleMin: number }) => {
    pointMaterial.uniforms.uPScale.value = params.pointScale;
    pointMaterial.uniforms.uPScaleMax.value = params.pointScaleMax;
    pointMaterial.uniforms.uPScaleMin.value = params.pointScaleMin;
    pointMaterial.uniforms.uPScaleCursor.value = params.pointCursorScale;
    pointMaterial.uniforms.uPScaleCursorMax.value = params.pointCursorScaleMax;
    pointMaterial.uniforms.uPScaleCursorMin.value = params.pointCursorScaleMin;
  }

  return {
    updateParams
  }
}

