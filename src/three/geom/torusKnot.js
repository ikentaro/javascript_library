const torusKnot=(radius=100, tube=40, radialSegments=64, tubularSegments=8, p=2, q=3, heightScale=1)=>{
    return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
}

export default torusKnot;
