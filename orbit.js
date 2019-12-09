const cube = document.querySelector('.cube');

let rotationX = 0;
let rotationY = 0;

const rotateCube = () => {
  rotationX += 1;
  rotationY += 2;
  cube.style.transform = `rotateY(${rotationX}deg)`;
  cube.style.transform += `rotateX(${rotationY}deg)`;
  window.requestAnimationFrame(rotateCube);
}

window.requestAnimationFrame(rotateCube);
