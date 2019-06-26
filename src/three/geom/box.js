const box=(width, height, depth, widthSegments=1, heightSegments=1, depthSegments=1)=>{
    return new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
}

export default box;
