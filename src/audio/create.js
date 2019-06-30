import context from './context.js'
import decodeAudioData from './create/decodeAudioData.js'

const create={
    elementSource: (htmlElem)=>{ return context.createMediaElementSource(htmlElem); },
    bufferSource: (url)=>{ return context.createBufferSource(); },

    decodeAudioData: decodeAudioData,
    oscillator:    ()=>{ return context.createOscillator(); },
    
    gain: ()=>{ return context.createGain(); },
    biquadFilter:  ()=>{ return context.createBiquadFilter(); },
    delay: ()=>{ return context.createDelay(); },
    
    analyser: ()=>{ return context.createAnalyser(); },
    analyzer: ()=>{ return context.createAnalyser(); },

}

export default create;
