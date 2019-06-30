const torus=(radius=100, tube=40, radialSegments=8, tubularSegments=6)=>{
    return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
}

export default torus;
