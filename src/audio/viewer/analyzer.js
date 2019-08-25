import context from '../context.js'

const analyzer=(node, graWave, graFreq)=>{
    const preiod=1.0/context.sampleRate;
    const freqDivN=context.sampleRate/node.fftSize;

    const draw=()=>{
	const waveForm =new Float32Array(node.fftSize);
	const freqForm =new Float32Array(node.frequencyBinCount);
	const timeArray=new Float32Array(node.fftSize);
	for( let i=0; i<timeArray.length; i++ ) timeArray[i]=i*preiod;

	const freqArray=new Float32Array(node.frequencyBinCount);
	for( let i=0; i<timeArray.length; i++ ) freqArray[i]=i*freqDivN;
    
	node.getFloatFrequencyData(freqForm);
	node.getFloatTimeDomainData(waveForm);
	if( graWave!=null ) graWave.draw(timeArray, waveForm);
	if( graFreq!=null ) graFreq.draw(freqArray, freqForm);

	window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);    
}

export default analyzer;
