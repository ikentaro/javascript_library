import context from '../context.js'

const currentTime=(html)=>{
    if( context.currentTime==null ) html.innerHTML='未実装';
    else{
	let fix=1;
	
	if( html.tagName==='INPUT' ){
	    const set=()=>{
		html.value=context.currentTime.toFixed(fix);
		window.requestAnimationFrame(set);
	    }
	    window.requestAnimationFrame(set);
	}
	else{
	    const set=()=>{
		html.innerHTML=context.currentTime.toFixed(fix);
		window.requestAnimationFrame(set);
	    }
	    window.requestAnimationFrame(set);
	}
    }
}

export default currentTime;
