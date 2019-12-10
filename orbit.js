const cube = document.querySelector('.cube');
const plane = document.querySelector('.plane');

let rotationX = 0;
let rotationY = 0;

const rotateCube = () => {
  rotationX += 1;
  rotationY += 1;
  cube.style.transform = `rotateY(${rotationX}deg)`;
  // cube.style.transform += `rotateX(${rotationY}deg)`;
  plane.style.transform = `rotateY(${-rotationX}deg)`;
  // plane.style.transform = `rotateX(${-rotationY}deg)`;
  window.requestAnimationFrame(rotateCube);
}

window.requestAnimationFrame(rotateCube);
