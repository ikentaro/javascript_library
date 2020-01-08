const loader=new THREE.TextureLoader();

const texture=(url)=>{
    console.log(url);
    return new Promise((resolve, reject)=>{
	loader.load(url, (loaded)=>{
	    console.log('load Texture', loaded);
	    resolve(loaded);
	});
    });
};

export default texture;
