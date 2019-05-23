import parseParam from './prespective/parseParam.js'

const prespective=(...args)=>{
    const { fov, aspect, near , far }=parseParam(...args);
 
    //    console.log(fov, aspect, near, far);
    return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

export default prespective;
