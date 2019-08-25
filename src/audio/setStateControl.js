import context from './context.js'

const setStateControl=(button)=>{
    const set=()=>{  button.innerHTML=context.state };
    context.addEventListener('statechange', set);
    
    button.addEventListener('click', ()=>{
	console.log('state change  befor ', context.state);
	if( context.state==='running' ) context.suspend();
	if( context.state==='suspended' ) context.resume();
    });
}

export default setStateControl;
