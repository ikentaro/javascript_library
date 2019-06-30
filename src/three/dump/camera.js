import config from '../config.js'

const camera=(a)=>{
    if( a==null ) a=config.camera;

    console.log(a);
    if( a instanceof THREE.PerspectiveCamera ){
	console.log('===== PerspectiveCamera  Dump =====');
	console.log('> fov :', a.fov);
	console.log('> aspect :', a.aspect);
    }
    else if( a instanceof THREE.OrthographicCamera ){
	console.log('===== OrthographicCamera  Dump =====');
	console.log('> [ left, right, top, bottom ] : [', a.left, ',', a.right, ',', a.top, ',', a.bottom, ']');
    }
    else throw new Error('! three.camera is invalid ');
    console.log('> [ near , far ] : [', a.near, ',', a.far, ']');
    console.log('> pos [ x, y, z ] : [', a.position.x, ',', a.position.y, ',', a.position.z, ']');
    console.log('> rot [ x, y, z ] : [', a.rotation.x, ',', a.rotation.y, ',', a.rotation.z, ']');
}

export default camera;
