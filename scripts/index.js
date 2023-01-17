import * as THREE from 'three';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';
import { Group, Scene } from 'three';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const listener = new THREE.AudioListener();
camera.add(listener);

const sound = new THREE.Audio(listener);

const audioLoader = new THREE.AudioLoader();


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe18f);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(18, 15, 13);
camera.rotation.set(0, 1, 0);

// camera controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(0.4, 5, 5);
// controls.update();
// controls.enablePan = false;
// controls.enableDamping = true;

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
  meja.name = 'meja';
  // console.log(meja.children);
  scene.add(meja);
});

loader.load('./glbf/monitor.glb', (glb) => {
  let monitor = glb.scene;
  monitor.scale.set(2, 2, 2);
  monitor.position.set(0, 9.5, -0.5);
  monitor.rotation.y = 0.12;
  monitor.name = 'monitor';
  console.log(monitor.children);
  scene.add(monitor);

  monitor.userData.clickable = true;
  monitor.userData.name = 'monitor';
});

loader.load('./glbf/kursi.glb', (glb) => {
  let kursi = glb.scene;
  kursi.scale.set(2, 2, 2);
  kursi.position.set(0, 5.8, 7);
  kursi.rotation.y = 1;
  kursi.name = 'kursi';
  scene.add(kursi);
});

loader.load('./glbf/tablet.glb', (glb) => {
  let tablet = glb.scene;
  tablet.scale.set(2, 2, 2);
  tablet.position.set(-4, 10.8, 2);
  tablet.rotation.y = 1;
  tablet.name = 'tablet';
  scene.add(tablet);
});

loader.load('./glbf/mousenew.glb', (glb) => {
  let mouse = glb.scene;
  mouse.scale.set(1, 1, 1);
  mouse.position.set(4, 10.9, 1);
  mouse.rotation.y = 4;
  mouse.name = 'mouse';
  scene.add(mouse);
});

loader.load('./glbf/keyboard.glb', (glb) => {
  let keyboard = glb.scene;
  keyboard.scale.set(2, 2, 2);
  keyboard.position.set(0, 10.65, 1.3);
  keyboard.rotation.y = 0.2;
  keyboard.name = 'keyboard';
  scene.add(keyboard);
});

loader.load('./glbf/text.glb', (glb) => {
  let text = glb.scene;
  text.scale.set(4,4,4);
  text.position.set(-5,20,10);
  text.rotation.x = Math.PI/2
  text.rotation.z = -Math.PI/4
  text.name = 'ase';
  scene.add(text);
  
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
  // controls.update();
  renderer.render(scene, camera);
}

animate();

const zoomTo = (x, y, z) => {
  gsap.to(camera.position, { x: x, y: y, z: z });
};

const rotateTo = (x, y, z) => {
  gsap.to(camera.rotation, { x: x, y: y, z: z });
};

const screen = document.querySelector('.screen');
screen.style.visbility = 'hidden';
const menu = document.querySelector('.portfolio-menu');

const martinPage = document.querySelector('.martin-page');
const rifqiPage = document.querySelector('.rifqi-page');
martinPage.style.display = 'none';
rifqiPage.style.display = 'none';

const backToMenu = document.querySelectorAll('.back-menu');
console.log(backToMenu);

var running = false;
const turnOnPc = () => {
  running = true;
  screen.style.visibility = 'visible';
  const backBtn = document.querySelector('#back-button');

  const martinPort = document.querySelector('#martin-port');
  const rifqiPort = document.querySelector('#rifqi-port');

  martinPort.addEventListener('click', (e) => {
    menu.style.display = 'none';
    martinPage.style.display = 'block';
  });

  rifqiPort.addEventListener('click', (e) => {
    menu.style.display = 'none';
    rifqiPage.style.display = 'block';
  });

  backBtn.addEventListener('click', (e) => {
    turnOffPc();
    running = false;
  });

  backToMenu.forEach((e) => {
    e.addEventListener('click', () => {
      menu.style.display = 'flex';
      rifqiPage.style.display = 'none';
      martinPage.style.display = 'none';
    });
  });

  const projectItems = document.querySelector('.project-items');
  martinProjects.forEach((project) => {
    let card = document.createElement('div');
    let cardTitle = document.createElement('h4');
    let cardDescription = document.createElement('p');
    let cardLink = document.createElement('a');

    card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${project.img}')`;
    card.style.backgroundSize = 'cover';
    cardTitle.innerHTML = project.title;
    cardDescription.innerHTML = project.description;
    cardLink.innerHTML = 'Go ->';

    card.classList.add('card');
    cardTitle.classList.add('card-title');
    cardDescription.classList.add('card-description');
    cardLink.classList.add('btn', 'card-link');

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardLink);
    projectItems.appendChild(card);
  });
};

const turnOffPc = () => {
  zoomTo(18, 15, 13);
  rotateTo(0, 1, 0);
  screen.style.visibility = 'hidden';
};

const rayCast = new THREE.Raycaster();
const mouse = new THREE.Vector2();

audioLoader.load('./audio/kobob.mp3', (audio) => {
  console.log(audio);
  sound.setBuffer(audio);
  sound.setLoop(false);
  sound.setVolume(0.5);
})

addEventListener('mousedown', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
  console.log(e.button);
  // console.log(mouse);

  rayCast.setFromCamera(mouse, camera);
  let items = rayCast.intersectObjects(scene.children);
  if (items.length > 0) {
    if (items[1].object.parent.parent.type != 'Scene') {
      switch (items[1].object.parent.parent.name) {
        case 'monitor':
          // isClicked = e.button == 0 ? true : false;

          if (!running) {
            zoomTo(0.5, 13.5, 3);
            rotateTo(0, 0.1, 0);
            const timeOut = setTimeout(turnOnPc, 600);
          }
          break;
      }
    } else {
      console.log(items[1].object.parent);
      switch (items[1].object.parent.name) {
        case 'ase':
          sound.play();
          break;
      }
    }
  }
  // items.forEach((i) => {
  //   console.log(i.object.parent);
  // })
});
