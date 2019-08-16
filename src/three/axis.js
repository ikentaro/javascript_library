import config from './config.js'

const axis=(size)=>{
    const axis = new THREE.AxesHelper(size);

    config.scene.add(axis);
    return axis;
}

export default axis;
