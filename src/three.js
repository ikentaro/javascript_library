import config from './three/config.js'

import camera from './three/camera.js'
import scene  from './three/scene.js'
import geom   from './three/geom.js'
import renderer from './three/renderer.js'
import material from './three/material.js'
import helper from './three/helper.js'

window.three=window.three || {
    getCamera:   ()=> { return config.camera; },
    getRenderer: ()=> { return config.renderer; },
    getScene:    ()=> { return config.scene; },
    
    camera:   camera,
    renderer: renderer,
    scene:    scene,
    geom:     geom,
    material: material,
    mesh: (geom, material)=>{ return new THREE.Mesh(geom, material); },

    helper: helper,
}

console.log('===== three module print =====');
console.log(window.three);
