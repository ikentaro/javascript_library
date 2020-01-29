const SoundFont=class{
    constructor(info, presets){
	this._info    = info;
	this._presets = presets.sort((a, b)=>{
	    if( a.bankID<b.bankID ) return -1;
	    if( a.bankID>b.bankID ) return 1;
	    if( a.MIDINumber<b.MIDINumber ) return -1;
	    if( a.MIDINumber>b.MIDINumber ) return 1;
	    return 0;
	});
    }
    
    get name()      { return this._info.name; }
    get version()   { return this._info.sf_version; }
    get engin()     { return this._info.sound_engin; }
    get date()      { return this._info.date; }
    get copyright() { return this._info.copy_right; }
    get presets()   { return this._presets; }
}

export default SoundFont;
