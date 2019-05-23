import config from './config.js'

import prespective from './camera/prespective.js'
import orthographic from './camera/orthographic.js'

const camera={
    prespective: (...args)=>{
	config.camera=prespective(...args);
	return config.camera;
    },
    orthographic: (...args)=>{
	config.camera=orthographic(...args);
	return config.camera;
    },
}

export default camera;
