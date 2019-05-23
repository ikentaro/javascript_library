import config from './config.js'
import gl from './renderer/gl.js'

const renderer={
    gl: (obj)=>{
	config.renderer=gl(obj);
	return config.renderer;
    },
}

export default renderer;
