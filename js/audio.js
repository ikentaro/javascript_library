window.addEventListener('DOMContentLoaded', async ()=>{
    console.log('===== audio test START  =====');

    document.getElementById('sampleRate').innerHTML=audio.context.sampleRate;
    audio.viewer.baseLatency(document.getElementById('baseLatency'));
    audio.viewer.outputLatency(document.getElementById('outputLatency'));
    audio.viewer.currentTime(document.getElementById('currentTime'));
    audio.viewer.state(document.getElementById('state'));
    
    const [ kick, hihat, snare ] = await Promise.all([ audio.create.decodeAudioData('./wav/kick.wav'), audio.create.decodeAudioData('./wav/hihat.wav'), audio.create.decodeAudioData('./wav/snare.wav') ]);

    document.getElementById('play').addEventListener('click', ()=>{
	const eightLength=noteLength()/8.;
	const startTime=audio.context.currentTime+0.01;

	playSound(kick, startTime);
	playSound(kick, startTime+4*eightLength);

	playSound(kick, startTime+2*eightLength);
	playSound(kick, startTime+6*eightLength);
	for( let i=0; i<8; i++ ) playSound(hihat, startTime+i*eightLength);
    });

    const masterGain=audio.create.gain();
    const filter=audio.create.biquadFilter();
    const delay=audio.module.delay();
    const pingPongDelay=audio.module.pingPongDelay();
    const chorus=audio.module.chorus();

//    audio.connect(masterGain, delay, pingPongDelay, filter, chorus, audio.context.destination);
    audio.connect(masterGain, chorus, audio.context.destination);
    
    audio.setGainControl(masterGain, document.getElementById('range-gain'), document.getElementById('span-gain'));
    audio.setQvalControl(filter, document.getElementById('range-Q'), document.getElementById('span-Q'));
    audio.setGainControl(filter, document.getElementById('range-filter-gain'), document.getElementById('span-filter-gain'));
    audio.setFreqControl(filter, document.getElementById('range-filter-freq'), document.getElementById('span-filter-freq'));
    audio.setDetuneControl(filter, document.getElementById('range-filter-detune'), document.getElementById('span-filter-detune'));
    audio.setFilterOption(filter, document.getElementById('filter-type'));

    audio.setDelayControl(delay.delay, document.getElementById('range-delay-time'), document.getElementById('span-delay-time'));
    audio.setFeedbackControl(delay, document.getElementById('range-delay-feedback'), document.getElementById('span-delay-feedback'));
    audio.setMixControl(delay, document.getElementById('range-delay-mix'), document.getElementById('span-delay-mix'));

    audio.setDelayControl(pingPongDelay.delay1, document.getElementById('range-ppdelay1-time'), document.getElementById('span-ppdelay1-time'));
    audio.setDelayControl(pingPongDelay.delay2, document.getElementById('range-ppdelay2-time'), document.getElementById('span-ppdelay2-time'));
    audio.setFeedbackControl(pingPongDelay, document.getElementById('range-ppdelay-feedback'), document.getElementById('span-ppdelay-feedback'));
    audio.setMixControl(pingPongDelay, document.getElementById('range-ppdelay-mix'), document.getElementById('span-ppdelay-mix'));

    audio.setFreqControl(chorus.lfo, document.getElementById('range-chorus-speed'), document.getElementById('span-chorus-speed'));
    audio.setGainControl(chorus.depth, document.getElementById('range-chorus-depth'), document.getElementById('span-chorus-depth'));
    audio.setMixControl(chorus, document.getElementById('range-chorus-mix'), document.getElementById('span-chorus-mix'));
    //    console.log(masterGain.gain);
    
    function playSound(buffer, time){ const source=audio.create.bufferSource(); source.buffer=buffer; source.connect(masterGain); source.start(time); }
    
    const range = document.getElementById('range-bpm'), span  = document.getElementById('span-bpm');
    function noteLength(){ return 60*4/document.getElementById('range-bpm').value; }
    
    function setBPM(){ span.value=range.value; }
    range.addEventListener('change', setBPM);
    setBPM();
    
    console.log('===== audio test FINISH =====');
});
