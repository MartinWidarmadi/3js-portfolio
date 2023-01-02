import * as THREE from 'three';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe18f);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 10, 20);

// camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

// loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('../node_modules/three/examples/js/libs/draco/gltf');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

loader.load('./glbf/meja.glb', (glb) => {
  let meja = glb.scene;
  meja.scale.set(2, 2, 2);
  meja.position.y = 4;
  meja.rotation.y = 9.6;
  scene.add(meja);
});

loader.load('./glbf/monitor.glb', (glb) => {
  let monitor = glb.scene;
  monitor.scale.set(2, 2, 2);
  monitor.position.set(0, 9.5, -0.5);
  monitor.rotation.y = 0.12;
  scene.add(monitor);
});

loader.load('./glbf/kursi.glb', (glb) => {
  let kursi = glb.scene;
  kursi.scale.set(2, 2, 2);
  kursi.position.set(0, 5.8, 7);
  kursi.rotation.y = 1;
  scene.add(kursi);
});

loader.load('./glbf/tablet.glb', (glb) => {
  let tablet = glb.scene;
  tablet.scale.set(2, 2, 2);
  tablet.position.set(-4, 10.8, 2);
  tablet.rotation.y = 1;
  scene.add(tablet);
});

loader.load('./glbf/mousenew.glb', (glb) => {
  let mouse = glb.scene;
  mouse.scale.set(1,1,1);
  mouse.position.set(4,10.9,1);
  mouse.rotation.y = 4
  scene.add(mouse);
})

// light
const directionalRightFrontLight = new THREE.DirectionalLight(0x000000, 5);
const helper1 = new THREE.DirectionalLightHelper(directionalRightFrontLight, 5, 0xff0000);
scene.add(directionalRightFrontLight);
// scene.add(helper1);
directionalRightFrontLight.position.set(15, 20, 10);
directionalRightFrontLight.rotation.set(1, 0, -0.5);

const directionalLeftFrontLight = new THREE.DirectionalLight(0x000000, 5);
const helper2 = new THREE.DirectionalLightHelper(directionalLeftFrontLight, 5, 0xff0000);
scene.add(directionalLeftFrontLight);
// scene.add(helper2);
directionalLeftFrontLight.position.set(-15, 20, 10);
directionalLeftFrontLight.rotation.set(1, 0, 0.5);

const directionalLeftBackLight = new THREE.DirectionalLight(0xffffff, 5);
const helper3 = new THREE.DirectionalLightHelper(directionalLeftBackLight, 5, 0xff0000);
scene.add(directionalLeftBackLight);
// scene.add(helper3);
directionalLeftBackLight.position.set(-15, 20, -10);
directionalLeftBackLight.rotation.set(-1, 0, 0.5);

const directionalRightBackLight = new THREE.DirectionalLight(0xffffff, 5);
const helper4 = new THREE.DirectionalLightHelper(directionalRightBackLight, 5, 0xff0000);
scene.add(directionalRightBackLight);
// scene.add(helper4);
directionalRightBackLight.position.set(15, 20, -10);
directionalRightBackLight.rotation.set(-1, 0, -0.5);

// animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
