const set=(config, obj)=>{
    console.log('three.config.set');
    config=Object.assign(config, obj);
    console.log(config);

    if( config.html!=null && typeof config.renderer.setSize==='function' ){
	console.log('setSize : ', config.html.clientWidth, config.html.clientHeight);
	console.log(config.renderer);
	config.renderer.setSize(config.html.clientWidth, config.html.clientHeight);

	config.html.appendChild(config.renderer.domElement);
    }
}

export default set;
