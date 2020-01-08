window.anime=window.anime || {
    request: (func)=>{
	console.log("Set Request Animation Frame :", func.name);
	const compositeFunc=()=>{
	    if( func()!==false ) window.requestAnimationFrame(compositeFunc);
	}
	window.requestAnimationFrame(compositeFunc);
    }
}

console.log('===== anime module print =====');
console.log(window.anume);
