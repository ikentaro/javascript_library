import parseGenerator from './parseGenerator.js'
import parseModulator from './parseModulator.js'

const parseGenMod=(zones, genChunk, modChunk)=>{
    for( let i=0; i<zones.length; i++ ){
	zones[i].generators={};
	zones[i].modulators=[];
	for( let j=zones[i].genStart; j<zones[i].genEnd; j++ ){
	    const [ key, value ] = parseGenerator(genChunk.data, j);
	    
	    if( zones[i].generators[key]!=null ) throw new Error('!!!!! SF2 Zone has same generator data '+key+' !!!!!');
	    zones[i].generators[key]=value;
	}

	for( let j=zones[i].modStart; j<zones[i].modEnd; j++ ){
	    zones[i].modulators.push(parseModulator(modChunk.data, j));
	}
    }
}

export default parseGenMod;
