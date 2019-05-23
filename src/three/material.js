const material={
    basic:    (obj)=>{ return new THREE.MeshBasicMaterial(obj); },
    normal:   (obj)=>{ return new THREE.MeshNormalMaterial(obj); },
    lambert:  (obj)=>{ return new THREE.MeshLambertMaterial(obj); },
    phong:    (obj)=>{ return new THREE.MeshPhongMaterial(obj); },
    toon:     (obj)=>{ return new THREE.MeshToonMaterial(obj); },
    standard: (obj)=>{ return new THREE.MeshStandardMaterial(obj); },
}

export default material;
