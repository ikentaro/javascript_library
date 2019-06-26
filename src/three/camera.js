import config from './config.js'

import perspective from './camera/perspective.js'
import orthographics from './camera/orthographic.js'

const camera={
    perspective: (...args)=>{
	config.camera=perspective(...args);
	return config.camera;
    },
    orthographics: (...args)=>{
	config.camera=orthographics(...args);
	return config.camera;
    }
}

export default camera;
