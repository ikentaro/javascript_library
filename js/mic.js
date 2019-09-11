window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== mic START  =====');
    const analyzer=audio.create.analyzer();
    const anaCanvas=document.getElementById('svg-canvas');
    svg.config.setPaper(anaCanvas);
    const graWave=svg.graph(0, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -1, ymax: 1, xmin: 0, xmax: analyzer.fftSize/audio.context.sampleRate });
    const graFreq=svg.graph(0.5*anaCanvas.clientWidth, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -200, ymax: -30, xmin:0, xmax: audio.context.sampleRate/2.0 });
    audio.viewer.analyzer(analyzer, graWave, graFreq);
    
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream=>{
	const mediaSS=audio.create.mediaStreamSource(stream);
	
	mediaSS.connect(analyzer).connect(audio.context.destination);
    });
    

    
    console.log('===== mic FINISH =====');
});
