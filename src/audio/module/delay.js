import create from '../create.js'

const Module=class{
    constructor(){
	console.log('===== Delay Module Constructor START  =====');
	this.delay=create.delay();	
	this.feedback=create.gain();
	this.dry=create.gain();
	this.wet=create.gain();
	this.delay.connect(this.wet);
	this.delay.connect(this.feedback).connect(this.delay);
	this.wet.gain.value=0.0;
	this.dry.gain.value=1.0;

	this.inputs=[ this.delay, this.dry ];
	console.log('===== Delay Module Constructor FINISH =====');
    }

    get delayTime(){ return this.delay.delayTime; }
    get feedbackGain(){ return this.feedback.gain; }
    get mix(){ return this.wet.gain.value; }
    set mix(val){
	this.wet.gain.value=val;
	this.dry.gain.value=1.0-val;
    }
    connect(next){
	this.wet.connect(next);
	this.dry.connect(next);
	return next;
    }
    disconnect(){
	this.wet.disconnect();
	this.dry.disconnect();
    }
};


const delay=()=>{
    return new Module();
}

export default delay;
