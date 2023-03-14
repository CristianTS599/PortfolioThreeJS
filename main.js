import './style.css';
import * as THREE from 'three';
import { TorusGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geo = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x007575,
  wireframe: true,
});

const geoTorus = new THREE.Mesh(geo, material);

scene.add(geoTorus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(gridHelper);

const spaceBack = new THREE.TextureLoader().load('./images/network.jpg');
scene.background = spaceBack;

function animate() {
  requestAnimationFrame(animate);
  geoTorus.rotation.x += 0.01;
  geoTorus.rotation.y += 0.005;
  geoTorus.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
