const setSmoothingTimeControl=(analyzer, input, valHtml)=>{
    const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=analyzer.smoothingTimeConstant; } : ()=>{ valHtml.innerHTML=analyzer.smoothingTimeConstant; }

    analyzer.snoothingTimeConstant=Number(input.value);
    setValue();

    input.addEventListener('change', ()=>{
	analyzer.smoothingTimeConstant=Number(input.value);
	setValue();
    });
}

export default setSmoothingTimeControl;
