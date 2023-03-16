import '../styles/contact.css';
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
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#contactCanvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

// create shape just to see things
const ring = new THREE.RingGeometry(5, 10, 8, 8, 0, 6.2831);
const material = new THREE.MeshStandardMaterial({
  color: 0xffd700,
  wireframe: true,
});
const ringMesh = new THREE.Mesh(ring, material);

const ambiantLight = new THREE.AmbientLight(0xffffff);
scene.add(ringMesh, ambiantLight);

const controls = new OrbitControls(camera, renderer.domElement);
const background = new THREE.TextureLoader().load(
  '../images/backimages/BlueSpace.png'
);

scene.background = background;

const GetRandomVal = (neg) => {
  let val = Math.floor(Math.random() * 500);

  if (neg === true) {
    return val * -1;
  }
  return val;
};

const CreateStars = () => {
  let shape = new THREE.TetrahedronGeometry(2, 0);
  let material = new THREE.MeshStandardMaterial({
    color: 0xffd700,
  });
  let shapeMesh = new THREE.Mesh(shape, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(600));
  shapeMesh.position.set(x, y, z);
  scene.add(shapeMesh);
};

Array(500).fill().forEach(CreateStars);

const planetTexture = new THREE.TextureLoader().load(
  '../images/planettextures/red1.jpg'
);

const sphere = new THREE.SphereGeometry(15, 32, 16, 0, 6.2831, 0, 3.1415);
const planet = new THREE.Mesh(
  sphere,
  new THREE.MeshBasicMaterial({ map: planetTexture })
);

planet.position.x = -20;
planet.position.z = -100;

const planet2 = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/forest.jpg'),
  })
);

planet2.position.x = 200;
planet2.position.z = -400;

const planet3 = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/purple1.jpg'),
  })
);
planet3.position.x = -50;

const planet4 = new THREE.Mesh(
  new THREE.SphereGeometry(40, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/blue1.jpg'),
  })
);
planet4.position.x = 600;

const planet5 = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/green1.jpg'),
  })
);
planet5.position.z = 400;

const planet6 = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/brown1.webp'),
  })
);
planet6.position.z = 300;
planet6.position.x = 200;

const planet6Ring = new THREE.Mesh(
  new THREE.RingGeometry(6, 150, 8, 8, 0, 6.2831),
  new THREE.MeshBasicMaterial({
    color: 0xfff,
  })
);
planet6Ring.position.z = 300;
planet6Ring.position.x = 200;

const planet7 = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/planettextures/red2.jpg'),
  })
);
planet7.position.z = 300;
planet7.position.x = -200;

const planet8 = new THREE.Mesh(
  new THREE.SphereGeometry(45, 32, 16, 0, 6.2831, 0, 3.1415),
  new THREE.MeshBasicMaterial({
    color: 0x000,
  })
);

planet8.position.x = -400;
planet8.position.z = -800;
planet8.rotateY(10);

scene.add(
  planet,
  planet2,
  planet3,
  planet4,
  planet5,
  planet6,
  planet6Ring,
  planet7,
  planet8
);

function animate() {
  requestAnimationFrame(animate);

  ringMesh.rotation.x += 0.05;
  ringMesh.rotation.y += 0.005;
  ringMesh.rotation.z += 0.01;

  planet.rotation.y += 0.005;
  planet2.rotation.y += 0.005;
  planet3.rotation.y += 0.005;
  planet4.rotation.y += 0.009;
  planet5.rotation.y += 0.005;
  planet6.rotation.y += 0.005;
  planet7.rotation.y += 0.005;
  planet8.rotation.y += 0.005;

  controls.update();
  renderer.render(scene, camera);
}

animate();
