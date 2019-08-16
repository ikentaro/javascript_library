const setFeedbackControl=(module, input, valHtml)=>{
    let fix=3;
    if( input.step!=null && input.step<1.0 ){
	fix=0;
	let step=input.step;
	while( step<1.0 ){
	    fix++;
	    step*=10;
	}
    }

    if( valHtml!=null ){
	const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=Number(module.feedbackGain.value).toFixed(fix) }
	      : ()=>{ valHtml.innerHTML=Number(module.feedbackGain.value).toFixed(fix) };
    
	module.feedbackGain.value=input.value;
	setValue();
	
	input.addEventListener('change', ()=>{
            module.feedbackGain.value=Number(input.value);
	    setValue();
	});
    }
    else{
	module.feedbackGain.value=input.value;	
	input.addEventListener('change', ()=>{ module.feedbackGain.value=Number(input.value); });
    }
}

export default setFeedbackControl;

