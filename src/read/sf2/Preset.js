const Preset =class {
    constructor(name, MIDINumber, bankID, globalZone, zones, library, generator, morphology){
	this._name       = name;
	this._MIDINumber = MIDINumber;
	this._bankID     = bankID;
	this._globalZone = globalZone;
	this._zones      = zones;
	this._library    = library;
	this._generator  = generator;
	this._morphology = morphology;
    }

    get name()      { return this._name; }
    get MIDINumber(){ return this._MIDINumber; }
    get bankID()    { return this._bankID; }
    get library()   { return this._library; }
    get generator() { return this._generator; }
    get morphology(){ return this._morphology; }
}

export default Preset;
