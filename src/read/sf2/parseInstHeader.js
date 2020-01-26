import getString     from './getString.js'
import getDoubleWord from './getDoubleWord.js'
import getWord       from './getWord.js'

const parseInstHeader=(header, bag)=>{
    let bagIndex=0, modIndex=0, genIndex=0;
    const instHeaders=[];
    for( let i=0; i<header.data.length; i+=22 ){
	const name=getString(header.data, i, i+20);
	if( name==="EOI" ) continue; // End Of Instrument
	const nextBagIndex=getWord(header.data, i+42); // 次のInstのデータを読む

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
	
	instHeaders.push({ 'name': name, 'zones': zones });
	bagIndex=nextBagIndex;
    }
    return instHeaders;
}

export default parseInstHeader;
		       
