window.addEventListener('DOMContentLoaded', async ()=>{
    console.log('===== asudio test START  =====');

    document.getElementById('sampleRate').innerHTML=audio.context.sampleRate;
    audio.viewer.baseLatency(document.getElementById('baseLatency'));
    audio.viewer.outputLatency(document.getElementById('outputLatency'));
    audio.viewer.currentTime(document.getElementById('currentTime'));
    audio.setStateControl(document.getElementById('state'));
    
    const [ jazz0, jazz1, jazz2 ] = await Promise.all([ audio.create.decodeAudioData('./music/CloserToJazz.mp3'),
							audio.create.decodeAudioData('./music/OkeyDokeySmokey.mp3'),
							audio.create.decodeAudioData('./music/StandardJazzBars.mp3') ]);
    let oscillator=audio.create.oscillator();
    
    document.getElementById('play').addEventListener('click', play);
    document.getElementById('stop').addEventListener('click', ()=> { location.reload(false) });
    
    const masterGain=audio.create.gain();
    const filter=audio.create.biquadFilter();
    const delay=audio.module.delay();
    const pingPongDelay=audio.module.pingPongDelay();
    const chorus=audio.module.chorus();
    const analyzer=audio.create.analyzer();

    const anaCanvas=document.getElementById('svg-canvas');
    svg.config.setPaper(anaCanvas);
    const graWave=svg.graph(0, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -1, ymax: 1, xmin: 0, xmax: analyzer.fftSize/audio.context.sampleRate });
    const graFreq=svg.graph(0.5*anaCanvas.clientWidth, 0, 0.5*anaCanvas.clientWidth, anaCanvas.clientHeight, { ymin: -200, ymax: -30, xmin:0, xmax: audio.context.sampleRate/2.0 });
    audio.viewer.analyzer(analyzer, graWave, graFreq);

    //*** setEventListnerConnector checkbox ***//
    connectModules();
    [ document.getElementById('delay-connect'), document.getElementById('ppdelay-connect'), document.getElementById('filter-connect'), document.getElementById('chorus-connect') ]
	.forEach(a=>{ a.addEventListener('change', connectModules); });

    
    //*** MasterGain Controller ***//
    audio.setGainControl(masterGain, document.getElementById('range-gain'), document.getElementById('span-gain'));

    //*** ByQuadFilter Controller ***//
    audio.setQvalControl(filter, document.getElementById('range-Q'), document.getElementById('span-Q'));
    audio.setGainControl(filter, document.getElementById('range-filter-gain'), document.getElementById('span-filter-gain'));
    audio.setFreqControl(filter, document.getElementById('range-filter-freq'), document.getElementById('span-filter-freq'));
    audio.setDetuneControl(filter, document.getElementById('range-filter-detune'), document.getElementById('span-filter-detune'));
    audio.setFilterOption(filter, document.getElementById('filter-type'));

    //*** DleayModule Controller ***//
    audio.setDelayControl(delay.delay, document.getElementById('range-delay-time'), document.getElementById('span-delay-time'));
    audio.setFeedbackControl(delay, document.getElementById('range-delay-feedback'), document.getElementById('span-delay-feedback'));
    audio.setMixControl(delay, document.getElementById('range-delay-mix'), document.getElementById('span-delay-mix'));

    //*** PingPongDleayModule Controller ***//
    audio.setDelayControl(pingPongDelay.delay1, document.getElementById('range-ppdelay1-time'), document.getElementById('span-ppdelay1-time'));
    audio.setDelayControl(pingPongDelay.delay2, document.getElementById('range-ppdelay2-time'), document.getElementById('span-ppdelay2-time'));
    audio.setFeedbackControl(pingPongDelay, document.getElementById('range-ppdelay-feedback'), document.getElementById('span-ppdelay-feedback'));
    audio.setMixControl(pingPongDelay, document.getElementById('range-ppdelay-mix'), document.getElementById('span-ppdelay-mix'));

    //*** ChurusModule Controller ***//
    audio.setFreqControl(chorus.lfo, document.getElementById('range-chorus-speed'), document.getElementById('span-chorus-speed'));
    audio.setGainControl(chorus.depth, document.getElementById('range-chorus-depth'), document.getElementById('span-chorus-depth'));
    audio.setMixControl(chorus, document.getElementById('range-chorus-mix'), document.getElementById('span-chorus-mix'));

    //*** Analyzer Controller ***//
    audio.setSmoothingTimeControl(analyzer, document.getElementById("range-analyzer-smoothing"), document.getElementById('span-smoothing-time'));
    
    //*** Display module setting ***//
    setDisplayControl(document.getElementById('filter-display'), document.getElementById('filter'));
    setDisplayControl(document.getElementById('delay-display'), document.getElementById('delay'));
    setDisplayControl(ppdelayDisp=document.getElementById('ppdelay-display'), document.getElementById('ppdelay'));
    setDisplayControl(document.getElementById('chorus-display'), chorusDiv=document.getElementById('chorus'));
    setDisplayControl(document.getElementById('analyzer-display'), anaDiv=document.getElementById('analyzer'));
    setDisplayControl(document.getElementById('oscillator-display'), anaDiv=document.getElementById('oscillator'));

    audio.setOscillatorType(oscillator, document.getElementById('oscillator-type'));
    audio.setFreqControl(oscillator, document.getElementById('range-oscillator-freq'), document.getElementById('span-oscillator-freq'));
    audio.setDetuneControl(oscillator, document.getElementById('range-oscillator-detune'), document.getElementById('span-oscillator-detune'));

    function play(){
	const option=[ ...document.getElementById('sound-src')].filter(a=> a.selected)[0];
	if( option.value==='jazz0'           ) playSound(jazz0);
	else if( option.value==='jazz1'      ) playSound(jazz1);
	else if( option.value==='jazz2'      ) playSound(jazz2);
	else if( option.value==='oscillator' ) playOscillator();
	else alert('音源が見つかりません');
	console.log(option.value);
    }
    
    function playSound(buffer, time){ const source=audio.create.bufferSource(); source.buffer=buffer; source.connect(masterGain); source.start(); }
    function playOscillator(){
	oscillator.connect(masterGain);
	oscillator.start();
    }
    function setDisplayControl(checkbox, elem){
	const flag=checkbox.checked;
	if( flag===true ) elem.style.display='block';
	else elem.style.display='none';

	checkbox.addEventListener('change', ()=>{
	    const flag=checkbox.checked;
	    if( flag===true ) elem.style.display='block';
	    else elem.style.display='none';
	});
    }

    function connectModules(){
	const modules=[ delay, pingPongDelay, filter, chorus, analyzer ];
	const bools=[ document.getElementById('delay-connect').checked, document.getElementById('ppdelay-connect').checked,
		      document.getElementById('filter-connect').checked, document.getElementById('chorus-connect').checked, true ];
	masterGain.disconnect();
	modules.forEach(a=>{ a.disconnect() });

	let input=masterGain;
	for( let i=0; i<modules.length; i++ ){
	    if( bools[i]===true ){
		audio.connect(input, modules[i]);
		input=modules[i];
	    }
	}
	input.connect(audio.context.destination);
    }
    
    console.log('===== audio test FINISH =====');
});
