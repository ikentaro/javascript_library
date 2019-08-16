import create from '../create.js'

const Module=class{
    constructor(){
        console.log('===== Delay Module Constructor START  =====');
	this.lfo  =create.oscillator();
	this.input=create.gain();
	this.depth=create.gain();
	this.delay=create.delay();
	this._mix=create.gain();
	this.output=create.gain();

	this.lfo.connect(this.depth).connect(this.delay.delayTime);
	this.input.connect(this.delay).connect(this._mix);

	this.inputs=[ this.input ];
	console.log('===== Delay Module Constructor FINISH =====');
    }

    get mix(){ return this._mix.gain.value; }
    set mix(val){ this._mix.gain.value=val; }
    connect(next){
	this.input.connect(next);
	this._mix.connect(next);
	return next;
    }
    disconnect(){
	this.input.disconnect();
	this._mix.disconnect();
    }
}

const chorus=()=>{
    return new Module();
}


export default chorus;
