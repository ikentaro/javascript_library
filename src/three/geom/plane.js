import parseParam from './plane/parseParam.js'

const plane=(...args)=>{
    const { width, height, widthSegments, heightSegments } = parseParam(...args);

    new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
}

export default plane;
