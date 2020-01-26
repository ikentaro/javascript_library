import print from './Sample/print.js'

const Sample=class{
    constructor(name, data, loopStart, loopEnd, samplingRate, originPitch, correction, link, type){
	this._name=name;
	this._data=data;
	this._loopStart=loopStart;
	this._loopEnd=loopEnd;
	this._samplingRate=samplingRate;
	this._originPitch=originPitch;
	this._correction=correction;
	this._link=link;
	this._type=type;
    }

    get name(){ return this._name; }
    get data(){ return this._data; }
    get loopStart(){ return this._loopStart; }
    get loopEnd(){   return this._loopEnd; }
    get samplingRate(){ return this._samplingRate; }
    get originPitch(){ return this._originPitch; }
    get correction(){ return this._correction; }
    get link(){ return this._link; }
    get type(){ return this._type; }

    print(){ print(this); }
}

export default Sample;
