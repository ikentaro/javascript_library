const setQvalControl=(filter, input, valHtml)=>{
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
	const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=Number(filter.Q.value).toFixed(fix) } : ()=>{ valHtml.innerHTML=Number(filter.Q.value).toFixed(fix) };
    
	filter.Q.value=input.value;
	setValue();
	
	input.addEventListener('change', ()=>{
	    filter.Q.value=Number(input.value);
	    setValue();
	});
    }else{
	filter.Q.value=input.value;
        input.addEventListener('change', ()=>{ filter.Q.value=Number(input.value); });
    }
}

export default setQvalControl;
