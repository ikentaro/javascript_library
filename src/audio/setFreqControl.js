const setFreqControl=(audioNode, input, valHtml)=>{
    const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=audioNode.frequency.value } : ()=>{ valHtml.innerHTML=audioNode.frequency.value };
    
    audioNode.frequency.value=input.value;
    setValue();

    input.addEventListener('change', ()=>{
	audioNode.frequency.value=Number(input.value);
	setValue();
    });
}

export default setFreqControl;
