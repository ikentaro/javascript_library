const cube=(width=1, height=1, depth=1, widthSegments=1, heightSegments=1, depthSegemtns=1)=>{
    return new THREE.CubeGeometry(width, height, depth, widthSegemtns, heightSegments, depthSegments);
}

export default cube;
