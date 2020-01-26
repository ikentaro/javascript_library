const Inst=class{
    constructor(name, globalZone, zones){
	this._name       = name;
	this._globalZone = globalZone;
	this._zones      = zones;

    }

    get name(){ return this._name; }
}

export default Inst;
