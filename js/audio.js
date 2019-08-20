window.addEventListener('DOMContentLoaded', async ()=>{
    console.log('===== audio test START  =====');

    document.getElementById('sampleRate').innerHTML=audio.context.sampleRate;
    audio.viewer.baseLatency(document.getElementById('baseLatency'));
    audio.viewer.outputLatency(document.getElementById('outputLatency'));
    audio.viewer.currentTime(document.getElementById('currentTime'));
    audio.viewer.state(document.getElementById('state'));

    const [ kick, hihat, snare ] = await Promise.all([ audio.create.decodeAudioData('./wav/kick.wav'), audio.create.decodeAudioData('./wav/hihat.wav'), audio.create.decodeAudioData('./wav/snare.wav') ]);
    document.getElementById('play').addEventListener('click', playDrum);

    const masterGain=audio.create.gain();
    const filter=audio.create.biquadFilter();
    const delay=audio.module.delay();
    const pingPongDelay=audio.module.pingPongDelay();
    const chorus=audio.module.chorus();

    [ document.getElementById('delay-connect'), document.getElementById('ppdelay-connect'), document.getElementById('filter-connect'), document.getElementById('chorus-connect') ].forEach(a=>{
	a.addEventListener('change', connectModules);
    });

    //******************************//    
    connectModules();
    function connectModules(){
	const modules=[ delay, pingPongDelay, filter, chorus ];
	const bools=[ document.getElementById('delay-connect').checked, document.getElementById('ppdelay-connect').checked,
		      document.getElementById('filter-connect').checked, document.getElementById('chorus-connect').checked ];
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

    //*** Display module setting ***//
    const filterDisp=document.getElementById('filter-display'), filterDiv=document.getElementById('filter');
    setDisplayControll(filterDisp, filterDiv);
    filterDisp.addEventListener('change', ()=>{
	const flag=filterDisp.checked;
	if( flag===true ) filterDiv.style.display='block';
	else filterDiv.style.display='none';
    });

    const delayDisp=document.getElementById('delay-display'), delayDiv=document.getElementById('delay');
    setDisplayControll(delayDisp, delayDiv);
    delayDisp.addEventListener('change', ()=>{
	const flag=delayDisp.checked;
	if( flag===true ) delayDiv.style.display='block';
	else delayDiv.style.display='none';
    });

    const ppdelayDisp=document.getElementById('ppdelay-display'), ppdelayDiv=document.getElementById('ppdelay');
    setDisplayControll(ppdelayDisp, ppdelayDiv);
    ppdelayDisp.addEventListener('change', ()=>{
	const flag=ppdelayDisp.checked;
	if( flag===true ) ppdelayDiv.style.display='block';
	else ppdelayDiv.style.display='none';
    });

    const chorusDisp=document.getElementById('chorus-display'), chorusDiv=document.getElementById('chorus');
    setDisplayControll(chorusDisp, chorusDiv);
    chorusDisp.addEventListener('change', ()=>{
	const flag=chorusDisp.checked;
	if( flag===true ) chorusDiv.style.display='block';
	else chorusDiv.style.display='none';
    });
        
    const range = document.getElementById('range-bpm'), span  = document.getElementById('span-bpm');
    range.addEventListener('change', setBPM);
    setBPM();

    function playSound(buffer, time){ const source=audio.create.bufferSource(); source.buffer=buffer; source.connect(masterGain); source.start(time); }
    function noteLength(){ return 60*4/document.getElementById('range-bpm').value; }
    function setBPM(){ span.value=range.value; }
    function setDisplayControll(checkbox, elem){
	const flag=checkbox.checked;
	if( flag===true ) elem.style.display='block';
	else elem.style.display='none';
    }
    function playDrum(){
	const eightLength=noteLength()/8.;
	const startTime=audio.context.currentTime+0.01;

	playSound(kick, startTime);
	playSound(kick, startTime+4*eightLength);

	playSound(kick, startTime+2*eightLength);
	playSound(kick, startTime+6*eightLength);
	for( let i=0; i<8; i++ ) playSound(hihat, startTime+i*eightLength);
    }
    
    console.log('===== audio test FINISH =====');
});
