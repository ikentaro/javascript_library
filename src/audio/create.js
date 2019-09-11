import context from './context.js'
import decodeAudioData from './create/decodeAudioData.js'

const create={
    elementSource: (htmlElem)=>{ return context.createMediaElementSource(htmlElem); },
    bufferSource: (url)=>{ return context.createBufferSource(); },

    decodeAudioData: decodeAudioData, // return Promise;
    oscillator:    ()=>{ return context.createOscillator(); },
    
    gain: ()=>{ return context.createGain(); },
    biquadFilter:  ()=>{ return context.createBiquadFilter(); },
    delay:  ()=>{ return context.createDelay(); },
    merger: ()=>{ return context.createChannelMerger(); },
    
    analyser: ()=>{ return context.createAnalyser(); },
    analyzer: ()=>{ return context.createAnalyser(); },

    mediaStreamSource: (stream)=>{ return context.createMediaStreamSource(stream); },
}

export default create;
