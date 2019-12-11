const cube = document.querySelector('.cube');
const orbitCube = document.querySelector('.orbit-cube');
const orbit = document.querySelector('.orbit');

let rotationX = 0;
let rotationY = 0;

const rotateCube = () => {
  rotationX = (rotationX += 2) % 360;
  rotationY = (rotationY += 3) % 360;
  Object.assign(cube.style, {transform: `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`})
  Object.assign(orbitCube.style, {transform: `rotateY(${-rotationX}deg) rotateX(${-rotationY}deg)`})
  orbit.style.transform = `rotateY(${rotationY}deg)`;
  window.requestAnimationFrame(rotateCube);
}

window.requestAnimationFrame(rotateCube);
