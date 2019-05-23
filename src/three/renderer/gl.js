const gl=(obj)=>{
    const renderer=new THREE.WebGLRenderer();
    console.log(obj);
    if( typeof obj==='object' && obj.html instanceof HTMLElement ){
	console.log('setSize');
	renderer.setSize(obj.html.clientWidth, obj.html.clientHeight);
    }

    return renderer;
}

export default gl;
