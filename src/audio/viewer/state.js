import context from '../context.js'

const state=(html)=>{
    if( context.state==null ) html.innerHTML='未実装';
    else{
	if( html.tagName==='INPUT' ){
	    const set=()=>{
		html.value=context.state;
		window.requestAnimationFrame(set);
	    }
	    window.requestAnimationFrame(set);
	}
	else{
	    const set=()=>{
		html.innerHTML=context.state;
		window.requestAnimationFrame(set);
	    }
	    window.requestAnimationFrame(set);
	}
    }
}

export default state;
