import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { createSpace } from '../elements/space';
import { addNewPlanetAndSpaceToScene } from './planet-builder';
import Stats from 'stats.js'
import { PlanetInfo } from './planet-types';

export interface ExportFunctions {
  moveCameraDefault: Function,
  moveCameraCloseup: Function,
  generateNewPlanet: Function
}

const initializeCamera = (renderer: THREE.WebGLRenderer) => {
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enablePan = false
  controls.enableDamping = true;
  controls.dampingFactor = .08
  controls.enabled = false

  return { camera, controls }
}

const initializeRenderer = (canvas: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return renderer
}

let currentCleanupFn: () => void
let currentAnimateFn: () => void

export const initializeScene = (canvas: HTMLElement, setPlanetInfo: Function, callback: () => void = () => { }) => {

  const renderer = initializeRenderer(canvas)
  const scene = new THREE.Scene()
  const { camera, controls } = initializeCamera(renderer)

  const moveCameraCloseup = (callback = () => { }) => {
    controls.enabled = false
    gsap.to(camera.position, { x: 0, y: 0, z: 2.5, duration: 1.5, ease: 'power4.out' });
    gsap.to(controls.target, {
      x: 2.5, y: 0, z: 0, duration: 1.5, ease: 'power4.out', onComplete: () => {
        callback()
      }
    });
  }

  const moveCameraDefault = (callback = () => { }) => {
    controls.enabled = false
    gsap.to(camera.position, { x: 0, y: 0, z: 5, duration: 1.5, ease: 'power4.out' });
    gsap.to(controls.target, {
      x: 0, y: 0, z: 0, duration: 1.5, ease: 'power4.out', onComplete: () => {
        callback()
        controls.enabled = true
      }
    })
  }

  const doZoomShotWithCamera = (callback: () => void = () => { }) => {
    camera.position.set(-300, -300, 200);
    moveCameraDefault(callback)
  }

  const gotoNewPlanet = (callback: () => void) => {

    //Cleanup any preexisting scene elements
    currentCleanupFn ? currentCleanupFn() : null

    //Add new elements to the scene
    const { planetInfo, planetAnimationFn, cleanupSceneFn } = addNewPlanetAndSpaceToScene(scene)
    currentCleanupFn = cleanupSceneFn
    currentAnimateFn = planetAnimationFn
    setPlanetInfo(planetInfo)

    doZoomShotWithCamera(callback)
  }

  const animate = () => {

    if (currentAnimateFn) {
      currentAnimateFn()
    }

    controls.update()
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  gotoNewPlanet(callback)

  animate();

  return {
    moveCameraDefault,
    moveCameraCloseup,
    generateNewPlanet: gotoNewPlanet
  }
}
