const cube = document.querySelector('.cube');
const orbitCube = document.querySelector('.orbit-cube');
const orbit = document.querySelector('.orbit');

let rotationX = 0;
let rotationY = 0;

const rotateCube = () => {
  rotationX += 1;
  rotationY += 2;
  cube.style.transform = `rotateY(${rotationX}deg)`;
  cube.style.transform += `rotateX(${rotationY}deg)`;
  orbitCube.style.transform = `rotateY(${-rotationX}deg)`;
  orbitCube.style.transform += `rotateX(${-rotationY}deg)`;
  orbit.style.transform = `rotateY(${rotationY}deg)`;
  window.requestAnimationFrame(rotateCube);
}

window.requestAnimationFrame(rotateCube);
