const setGainControl=(gain, input, valHtml)=>{
    let fix=3;
    if( input.step!=null && Number(input.step)<1.0 ){
	fix=0;
	let step=input.step;
	while( step<1.0 ){
	    fix++;
	    step*=10;
	}
    }
    
    if( valHtml!=null ){	
	const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=Number(gain.gain.value).toFixed(fix) } : ()=>{ valHtml.innerHTML=Number(gain.gain.value).toFixed(fix) };
    
	gain.gain.value=Number(input.value);
	setValue();
  
	input.addEventListener('change', ()=>{
	    gain.gain.value=Number(input.value);
	    setValue();
	});
    }
    else{
	gain.gain.value=input.value;
	input.addEventListener('change', ()=>{ gain.gain.value=Number(input.value); });
    }
}

export default setGainControl;
