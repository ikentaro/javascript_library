import config from './three/config.js'
import dump from './three/dump.js'
import mesh from './three/mesh.js'
import render from './three/render.js'

import camera   from './three/camera.js'
import material from './three/material.js'
import geom     from './three/geom.js'
import light    from './three/light.js'

window.three=window.three || {
    config: config,
    dump:   dump,
    render: render,
    
    camera:   camera,
    material: material,
    geom:     geom,
    light:    light,
    mesh:   mesh,
}

console.log('===== three module dump =====');
console.log(window.three);
