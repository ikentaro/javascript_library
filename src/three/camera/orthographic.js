import parseArgs from './orthographic/parseArgs.js'
import setParam from './setParam.js'

const orthographic=(...args)=>{
    const obj=parseArgs(...args);

    const cam=new THREE.OrthographicCamera(obj.left, obj.right, obj.top, obj.bottom, obj.near, obj.far);
    setParam(cam, obj);
    
    return cam;
}

export default orthographic;
