import parseArgs from './perspective/parseArgs.js'
import setParam from './setParam.js'

const perspective=(...args)=>{
    const obj=parseArgs(...args);

    const cam= new THREE.PerspectiveCamera(obj.fov, obj.aspect, obj.near, obj.far);
    setParam(cam, obj);
    
    return cam;
}

export default perspective;
