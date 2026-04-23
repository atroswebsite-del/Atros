import * as THREE from 'three';
import { LinearFilter, Object3D, PerspectiveCamera, RGBAFormat, Scene, Vector2, WebGLRenderer, WebGLRenderTarget, } from 'three';
import { EffectComposer, OrbitControls, Pass, RenderPass } from 'three/examples/jsm/Addons.js';

export interface AnimRootParams {
  containerEle: string | HTMLElement;
  fov: number;
  zNear: number;
  zFar: number;
  createCameraControls: boolean;
  autoStart: boolean;
  pixelRatio: number;
  antialias: boolean;
  alpha: boolean;
}

export type UpdateCallback = () => void;
export type ResizeCallback = () => void;

export class AnimRoot {

  private objects: Map<string, Object3D>;
  public renderer: THREE.WebGLRenderer;
  private container: HTMLElement;
  public camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  private controls?: OrbitControls;
  private composer?: EffectComposer;
  private resizeCallbacks: Array<ResizeCallback>;
  private updateCallbacks: UpdateCallback[];

  constructor(initConfig: Partial<AnimRootParams>) {
    // defaults
    const params: AnimRootParams = Object.assign({
      containerEle: '#three-container',
      fov: 55,
      zNear: 2,
      zFar: 2000,
      createCameraControls: true,
      autoStart: true,
      pixelRatio: window.devicePixelRatio,
      antialias: (window.devicePixelRatio === 1),
      alpha: false
    }, initConfig);

    // maps and arrays
    this.updateCallbacks = [];
    this.resizeCallbacks = [];
    this.objects = new Map();

    // renderer
    this.renderer = new WebGLRenderer({
      antialias: params.antialias,
      alpha: params.alpha
    });
    this.renderer.setPixelRatio(params.pixelRatio);

    // container
    this.container = (typeof params.containerEle === 'string') ? document.querySelector(params.containerEle) || document.body : params.containerEle;
    this.container.appendChild(this.renderer.domElement);

    // camera
    this.camera = new PerspectiveCamera(
      params.fov,
      window.innerWidth / window.innerHeight,
      params.zNear,
      params.zFar
    );

    // scene
    this.scene = new Scene();

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.listenToKeyEvents(window);
    this.controls.enableDamping = true;

    // resize handling
    // this.resize = this.resize.bind(this);
    this.resize();
    window.addEventListener('resize', () => { this.resize() }, false);

    // tick / update / render
    this.tick = this.tick.bind(this);
    params.autoStart && this.tick();

    // optional camera controls
    // params.createCameraControls && this.createOrbitControls();
  }

  public createOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.listenToKeyEvents(window);
    this.controls.enableDamping = true;
    this.addUpdateCallback(() => { this.controls?.update() });
  }
  public start() {
    this.tick();
  }
  public addUpdateCallback(callback: UpdateCallback) {
    this.updateCallbacks.push(callback);
  }
  public addResizeCallback(callback: ResizeCallback) {
    this.resizeCallbacks.push(callback);
  }
  public add(object: Object3D, key: string) {
    if (this.objects.has(key)) {
      this.remove(key);
      this.objects.set(key, object);
    } else {
      this.objects.set(key, object);
    }
    this.scene.add(object);
  }
  public addTo(object: Object3D, parentKey: string, key: string) {
    if (!this.objects.has(parentKey)) return false;
    if (this.objects.has(key)) {
      this.remove(key);
      this.objects.set(key, object);
    } else {
      this.objects.set(key, object);
    }
    this.get(parentKey)?.add(object);
    return true;
  }
  public get(key: string) {
    return this.objects.get(key);
  }
  public remove(o: string | Object3D) {

    if (typeof o === 'string') {
      const object = this.get(o);
      object?.parent?.remove(object);
      this.objects.delete(o);
    }
    else {
      o.parent?.remove(o);
      let k = '';
      for (let [key, value] of this.objects) {
        if (value === o) {
          k = key;
        }
      }
      this.objects.delete(k);
    }
  }

  private tick() {
    this.controls?.update();
    this.update();
    this.render();
    // this.renderer.setAnimationLoop(this.tick);
    requestAnimationFrame(() => { this.tick() });
  }

  private update() {
    this.updateCallbacks.forEach(function (callback) { callback() });
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
  }
  public resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.resizeCallbacks.forEach((callback) => { callback() });
  }
  public initPostProcessing(passes: Pass[]) {
    const size = new Vector2();
    this.renderer.getSize(size);
    const pixelRatio = this.renderer.getPixelRatio();
    size.width *= pixelRatio;
    size.height *= pixelRatio;

    const composer = this.composer = new EffectComposer(this.renderer, new WebGLRenderTarget(size.width, size.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat,
      stencilBuffer: false
    }));

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    for (let i = 0; i < passes.length; i++) {
      const pass = passes[i];
      pass.renderToScreen = (i === passes.length - 1);
      this.composer.addPass(pass);
    }

    this.renderer.autoClear = false;
    this.render = () => {
      this.renderer.clear();
      this.composer?.render();
    };

    this.addResizeCallback(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      composer.setSize(width * pixelRatio, height * pixelRatio);
    });
  }
}

