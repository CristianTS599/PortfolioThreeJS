import './styles/style.css';
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

// create first shape

// new chape geometry
const geo = new THREE.TorusKnotGeometry(5, 2, 100, 8, 2, 3);
const geo2 = new THREE.TorusKnotGeometry(5, 2, 100, 8, 2, 3);
const geo3 = new THREE.TorusKnotGeometry(10, 2, 100, 8, 2, 3);
const geo4 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
const geo5 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
const geo6 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
const geo7 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
const geo8 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
const geo9 = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);

// create material for shape
const material = new THREE.MeshStandardMaterial({
  color: 0xd60047,
  wireframe: true,
});

// create torus geometry with material
const geoTorus = new THREE.Mesh(geo, material);
const geoTorus2 = new THREE.Mesh(geo2, material);
const geoTorus3 = new THREE.Mesh(geo3, material);
const geoTorus4 = new THREE.Mesh(geo4, material);
const geoTorus5 = new THREE.Mesh(geo5, material);
const geoTorus6 = new THREE.Mesh(geo6, material);
const geoTorus7 = new THREE.Mesh(geo7, material);
const geoTorus8 = new THREE.Mesh(geo8, material);
const geoTorus9 = new THREE.Mesh(geo9, material);

const SetPositionParameters = (geo, pX, pY, pZ, rX, rY, rZ) => {
  geo.position.x = pX;
  geo.position.y = pY;
  geo.position.z = pZ;
  geo.rotation.x += rX;
  geo.rotation.y += rY;
  geo.rotation.z += rZ;
};

const GetRandomVal = (neg) => {
  let val = Math.floor(Math.random() * 300) + 1;

  if (neg === true) {
    return val * -1;
  }
  return val;
};

const AutomateGeos = () => {
  let neg = false;
  for (let i = 0; i < 200; ++i) {
    if (i % 2 === 0) {
      neg = true;
    } else {
      neg = false;
    }

    const newGeo = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
    const newGeoTorus = new THREE.Mesh(newGeo, material);
    SetPositionParameters(
      newGeoTorus,
      GetRandomVal(neg),
      GetRandomVal(neg),
      GetRandomVal(neg),
      0.01,
      0.005,
      0.01
    );
    scene.add(newGeoTorus);
  }
};

scene.add(
  geoTorus,
  geoTorus2,
  geoTorus3,
  geoTorus4,
  geoTorus5,
  geoTorus6,
  geoTorus7,
  geoTorus8,
  geoTorus9
);
//scene.add(geoTorus2);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(gridHelper);

const spaceBack = new THREE.TextureLoader().load(
  './images/backimages/network.jpg'
);
scene.background = spaceBack;

function animate() {
  requestAnimationFrame(animate);

  SetPositionParameters(geoTorus, 10, 10, 0, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus2, -25, 0, 5, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus3, 0, -20, 20, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus4, 0, 0, 50, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus5, -40, 20, 50, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus6, 40, 0, 45, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus7, 40, -35, 75, 0.01, 0.05, 0.01);
  SetPositionParameters(geoTorus8, -50, -45, 90, 0.01, 0.005, 0.01);
  SetPositionParameters(geoTorus9, -40, -20, 140, 0.01, 0.005, 0.01);

  controls.update();
  renderer.render(scene, camera);
}

AutomateGeos();
animate();
