import config from './config.js'

const render=()=>{
    config.renderer.render(config.scene, config.camera);
}

export default render;
