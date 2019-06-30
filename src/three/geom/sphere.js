const sphere=(radius=50, widthSegments=8, heightSegments=6, phiStart=0, phiLength=2*Math.PI, thetaStart=0, thetaLength=Math.PI)=>{
    return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
}

export default sphere;
