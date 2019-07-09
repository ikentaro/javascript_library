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
//    masterGain.connect(delay.input);
//    delay.wet.connect(audio.context.destination);
//    delay.dry.connect(audio.context.destination);
//    delay.connect(filter);
    //    filter.connect(audio.context.destination);
    audio.connect(masterGain, delay, chorus, filter, audio.context.destination);
    
    audio.setGainControl(masterGain, document.getElementById('range-gain'), document.getElementById('span-gain'));
    audio.setQvalControl(filter, document.getElementById('range-Q'), document.getElementById('span-Q'));
    audio.setGainControl(filter, document.getElementById('range-filter-gain'), document.getElementById('span-filter-gain'));
    audio.setFreqControl(filter, document.getElementById('range-filter-freq'), document.getElementById('span-filter-freq'));
    audio.setFilterOption(filter, document.getElementById('filter-type'));
    audio.setDetuneControl(filter, document.getElementById('range-filter-detune'), document.getElementById('span-filter-detune'));
    //    console.log(masterGain.gain);
    
    function playSound(buffer, time){ const source=audio.create.bufferSource(); source.buffer=buffer; source.connect(masterGain); source.start(time); }
    
    const range = document.getElementById('range-bpm'), span  = document.getElementById('span-bpm');
    function noteLength(){ return 60*4/document.getElementById('range-bpm').value; }
    
    function setBPM(){ span.innerHTML=range.value; }
    range.addEventListener('change', setBPM);
    setBPM();
    
    console.log('===== audio test FINISH =====');
});
