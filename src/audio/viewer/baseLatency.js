import context from '../context.js'

const baseLatency=(html)=>{
    if( context.baseLatency==null ) html.innerHTML='未実装';
    else{
	const set=()=>{
	    html.innerHTML=context.baseLatency;
	    window.requestAnimationFrame(set);
	}
	window.requestAnimationFrame(set);
    }
}

export default baseLatency;
