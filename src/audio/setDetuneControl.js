const setDetuneControl=(audioNode, input, valHtml)=>{
    const setValue=valHtml.tagName==='INPUT' ? ()=>{ valHtml.value=audioNode.detune.value } : ()=>{ valHtml.innerHTML=audioNode.detune.value }
    
    audioNode.detune.value=input.value;
    setValue();

    input.addEventListener('change', ()=>{
	audioNode.detune.value=Number(input.value);
	setValue();
    });
}

export default setDetuneControl;
