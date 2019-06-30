const circle=(radius=50, segments=8, thetaStart=0, thetaLength=2*Math.PI)=>{
    return new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);
}

export default circle;
