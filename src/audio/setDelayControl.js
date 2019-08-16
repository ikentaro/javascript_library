const setDelayControl=(delay, input, valHtml)=>{
    let fix=5;
    if( input.step!=null && input.step<1.0 ){
	fix=0;
	let step=input.step;
	while( step<1.0 ){
	    fix++;
	    step*=10;
	}
    }

    if( valHtml!=null ){
	const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=Number(delay.delayTime.value).toFixed(fix) } : ()=>{ valHtml.innerHTML=Number(delay.delayTime.value).toFixed(fix) }
	
	delay.delayTime.value=Number(input.value);
	setValue();
	
	input.addEventListener('change', ()=>{
            delay.delayTime.value=Number(input.value);
	    setValue();
	});
    }
    else{
	delay.delayTime.value=Number(input.value);	
	input.addEventListener('change', ()=>{ delay.delayTime.value=Number(input.value); });	
    }
}

export default setDelayControl;
