import config from './three/config.js'
import dump from './three/dump.js'
import mesh from './three/mesh.js'
import render from './three/render.js'

import camera   from './three/camera.js'
import material from './three/material.js'
import geom     from './three/geom.js'
import light    from './three/light.js'

import axis from './three/axis.js'

import texture from './three/texture.js'

import orbitControl from './three/orbitControl.js'

window.three=window.three || {
    config: config,
    dump:   dump,
    render: render,
    
    camera:   camera,
    material: material,
    geom:     geom,
    light:    light,
    mesh:   mesh,
    
    axis: axis,

    orbitControl: orbitControl,

    texture: texture, // Promise texture(ural);
    
    vector3: (x, y, z)=>{ return new THREE.Vector3(x, y, z); },
    geometory: ()=>{ return new THREE.Geometry(); },
    line: (geom, material)=>{ return new THREE.Line(geom, material); },
}

console.log('===== three module dump =====');
console.log(window.three);
