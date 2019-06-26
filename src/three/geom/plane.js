const plane=(width, height, widthSegments=1, heightSegments=1)=>{
    return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
}

export default plane;
