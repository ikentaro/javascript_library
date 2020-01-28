const anime={
    request: (func)=>{
	console.log("Set Request Animation Frame :", func.name);
	const compositeFunc=()=>{
	    if( func()!==false ) window.requestAnimationFrame(compositeFunc);
	}
	window.requestAnimationFrame(compositeFunc);
    }
}

window.anime=window.anime || anime;

if( window.anime===anime ) console.log('>>>>> anime Module Loaded <<<<<');
