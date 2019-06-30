window.addEventListener('DOMContentLoaded', async ()=>{
    console.log('===== audio test START  =====');
    //    audioDev= await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    //    console.log(audioDev);
    document.getElementById('sampleRate').innerHTML=audio.context.sampleRate;
    
    audio.viewer.baseLatency(document.getElementById('baseLatency'));
    audio.viewer.outputLatency(document.getElementById('outputLatency'));
    audio.viewer.currentTime(document.getElementById('currentTime'));
    audio.viewer.state(document.getElementById('state'));
    
    const [ kick, hihat, snare ] = await Promise.all([ audio.create.decodeAudioData('./wav/kick.wav'), audio.create.decodeAudioData('./wav/hihat.wav'), audio.create.decodeAudioData('./wav/snare.wav') ]);
    console.log(kick , hihat, snare);

    document.getElementById('play').addEventListener('click', ()=>{	
	const eightLength=noteLength()/8.;
	const startTime=audio.context.currentTime+0.01;

	playSound(kick, startTime);
	playSound(kick, startTime+4*eightLength);

	playSound(kick, startTime+2*eightLength);
	playSound(kick, startTime+6*eightLength);
	for( let i=0; i<8; i++ ) playSound(hihat, startTime+i*eightLength);
    });

    function playSound(buffer, time){
//	console.log(buffer, time);
	const source=audio.create.bufferSource();
	source.buffer=buffer;
	source.connect(audio.context.destination);
	source.start(time);
    }
    
    const range = document.getElementById('range-bpm'), span  = document.getElementById('span-bpm');
    function noteLength(){ return 60*4/document.getElementById('range-bpm').value; }
    
    function setBPM(){ span.innerHTML=range.value; }
    range.addEventListener('change', setBPM);
    setBPM();
    
    console.log('===== audio test FINISH =====');
});
