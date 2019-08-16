const setMixControl=(module, input, valHtml)=>{
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
	const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=Number(module.mix).toFixed(fix) } : ()=>{ valHtml.innerHTML=Number(module.mix).toFixed(fix) };
	
	module.mix=input.value;
	setValue();
	
	input.addEventListener('change', ()=>{
	    module.mix=Number(input.value);
	    setValue();
	});
    }
    else{
	module.mix=input.value;	
	input.addEventListener('change', ()=>{ module.mix=Number(input.value); });
    }
}

export default setMixControl;
