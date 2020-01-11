window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== mic START  =====');
    const analyzer=audio.create.analyzer();
    const anaCanvas=document.getElementById('svg-canvas');
    svg.config.setPaper(anaCanvas);
    const graWave=svg.graph(0, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -1, ymax: 1, xmin: 0, xmax: analyzer.fftSize/audio.context.sampleRate });
    const graFreq=svg.graph(0.5*anaCanvas.clientWidth, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -200, ymax: -30, xmin:0, xmax: audio.context.sampleRate/2.0 });
    audio.viewer.analyzer(analyzer, graWave, graFreq);

    const finishBtn=document.getElementById('finish');
    const downloadA=document.getElementById('download');
    
    const chunks=[];
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream=>{
	const mediaSS=audio.create.mediaStreamSource(stream);
	const recorder=new MediaRecorder(stream);
	if( confirm('録音しますか❓') ){
	    recorder.start();
	    finishBtn.disabled=false;
	}
	mediaSS.connect(analyzer).connect(audio.context.destination);

	recorder.addEventListener('dataavailable', (e)=>{ console.log('ondataavailable', e.data); chunks.push(e.data); });
	recorder.addEventListener('stop', ()=>{
	    console.log('Audio file closing');
	    const blob=new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
	    downloadA.href=URL.createObjectURL(blob);
	    downloadA.innerHTML="ダウンロード"
	    finishBtn.style.display="none";
	});
	
	finish.addEventListener('click', ()=>{ recorder.stop(); });
    });
    console.log('===== mic FINISH =====');
});
