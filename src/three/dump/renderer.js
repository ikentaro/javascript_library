import config from '../config.js'

const renderer=(a)=>{
    if( a==null ) a=config.renderer;

    if( a instanceof THREE.WebGLRenderer ){
	console.log('===== WebGLRenderer  Dump =====');

    }
    else console.log('===== unknown Renderer =====');
}

export default renderer;
