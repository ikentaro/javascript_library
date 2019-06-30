const cylinder=(radiusTop=20, radiusBottom=20, height=100, radiusSegments=8, heightSegments=1, openEnded=false)=>{
    return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded);
}

export default cylinder;
