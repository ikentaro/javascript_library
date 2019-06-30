const lathe=(points, segments=12, phiStart=0, phiLength=2*Math.PI)=>{
    return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
}

export default lathe;
