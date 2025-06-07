
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0D0D0D);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('productCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(0.4, 0.1, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xB76E79, metalness: 0.7, roughness: 0.2 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const animate = function () {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();




// Confettis lors de la validation
function createConfetti() {
  const colors = ['#B76E79', '#F5F5F5', '#B76E79'];
  for (let i = 0; i < 150; i++) {
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-paiement');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.innerHTML = `
        <div class="confirmation">
          <h3>🎉 Paiement validé !</h3>
          <p>Merci pour votre commande. Redirection en cours...</p>
        </div>
      `;
      createConfetti();
      setTimeout(() => {
        window.location.href = "merci.html";
      }, 3000);
    });
  }
});
