import create from '../create.js'

const Module=class{
    constructor(){
	console.log('===== PingPongDelay Module Constructor START  =====');
	this.merger    = create.merger();
	this.delay1    = create.delay();
	this.delay2    = create.delay();
	this.feedback  = create.gain();
	this.wet       = create.gain();
	this.dry       = create.gain();

	this.delay1.connect(this.delay2).connect(this.feedback).connect(this.delay1);
	this.delay1.connect(this.merger, 0, 0);
	this.delay2.connect(this.merger, 0, 1);
	this.merger.connect(this.wet);

	this.inputs= [ this.delay1, this.dry ];
	console.log('===== PingPongDelay Module Constructor FINISH =====');
    }

    get delayTime1(){ return this.delay1.delayTime; }
    get delayTime2(){ return this.delay2.delayTime; }
    get feedbackGain(){ return this.feedback.gain; }
    get mix(){ return this.wet.gain.value; }
    set mix(val){
	this.wet.gain.value=val;
	this.dry.gain.value=1.0-val;
    }
    connect(next){
	this.dry.connect(next);
	this.wet.connect(next);
	return next;
    }
    disconnect(){
	this.dry.disconnect();
	this.wet.disconnect();
    }
}

const pingPhongDelay=()=>{ return new Module(); }

export default pingPhongDelay;
