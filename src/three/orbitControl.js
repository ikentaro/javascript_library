import config from './config.js'

const orbitControl=()=>{
    const controls=new THREE.OrbitControls(config.camera);
    const update=()=>{
	controls.update();
	requestAnimationFrame(update);
    }
}

export default orbitControl;
