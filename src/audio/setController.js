import gainInput from './setController/gainInput.js'

const setController=(audio, html, valHtml)=>{
    console.log(audio instanceof GainNode );
    console.log('tag ', html.tagName);

    if( audio instanceof GainNode && html!=null && html.tagName==='INPUT' ) gainInput(audio, html, valHtml);
    else throw new Error('! setControllerは未実装です '+audio+' '+html.tagName);
}

export default setController;
