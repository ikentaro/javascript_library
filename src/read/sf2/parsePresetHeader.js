import getString     from './getString.js'
import getDoubleWord from './getDoubleWord.js'
import getWord       from './getWord.js'

const parsePresetHeader=(header, bag)=>{
    let bagIndex=0, genIndex=0, modIndex=0;
    const presetHeaders=[];
    for( let i=0; i<header.data.length; i+=38 ){
	const name         = getString(header.data, i, i+ 20);
	if( name==='EOP' ) continue; // End Of Preset
	const MIDINumber   = getWord(header.data, i+20);
	const bankID       = getWord(header.data, i+22);
	const nextBagIndex = getWord(header.data, i+62); // 38 (presetSize) +24 (offset)
	const library      = getDoubleWord(header.data, i+26);
	const generator    = getDoubleWord(header.data, i+30);
	const morphology   = getDoubleWord(header.data, i+34);

	const zones=[];
	for( let j=bagIndex; j<nextBagIndex; j++ ){
	    const nextGenIndex=getWord(bag.data, 4*(j+1));
	    const nextModIndex=getWord(bag.data, 4*(j+1)+2);
	    zones.push({
		genStart: genIndex,
                genEnd:   nextGenIndex,
                modStart: modIndex,
                modEnd:   nextModIndex,
            });
            genIndex=nextGenIndex;
            modIndex=nextModIndex;
	}
	presetHeaders.push({
	    'name':       name,
	    'zones':      zones,
	    'MIDINumber': MIDINumber,
	    'bankID':     bankID,
	    'library':    library,
	    'generator':  generator,
	    'morphology': morphology
	});
    }
    return presetHeaders;
}

export default parsePresetHeader;
