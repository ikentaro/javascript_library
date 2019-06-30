import context from '../context.js'

const outputLatency=(html)=>{
    if( context.outputLatency==null ) html.innerHTML='未実装';
    else{
	const set=()=>{
	    html.innerHTML=context.outputLatency;
	    window.requestAnimationFrame(set);
	}
	window.requestAnimationFrame(set);
    }
}

export default outputLatency;
