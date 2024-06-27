
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.136.0/build/three.module.js';
import { Rhino3dmLoader } from 'https://cdn.jsdelivr.net/npm/three@0.136.0/examples/jsm/loaders/3DMLoader.js';

let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new Rhino3dmLoader();
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm/');

    const url = 'https://raw.githubusercontent.com/eugeraigada/kurvatur01/eugeraigada-FS.C2.100.25/FS-C2-100-25_CURVED.3dm';
    loader.load(url, function (object) {
        scene.add(object);
        object.position.set(0, 0, 0);
    });

    camera.position.z = 10;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
}

window.onload = init;
