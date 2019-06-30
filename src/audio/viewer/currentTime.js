import context from '../context.js'

const currentTime=(html)=>{
    if( context.currentTime==null ) html.innerHTML='未実装';
    else{
	const set=()=>{
	    html.innerHTML=context.currentTime;
	    window.requestAnimationFrame(set);
	}
	window.requestAnimationFrame(set);
    }
}

export default currentTime;
