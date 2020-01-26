import getString     from './getString.js'
import getDoubleWord from './getDoubleWord.js'
import getWord       from './getWord.js'

import Sample  from './Sample.js'

const makeSample=(header, data)=>{
    const samples=[];
    for( let i=0; i<header.data.length; i+=46 ){
	const name=getString(header.data, i, i+20);
	if( name==='EOS' ) continue;
	const start = getDoubleWord(header.data, i+20);
	const end   = getDoubleWord(header.data, i+24);
	const sampleData = getSampleData(data, start, end);
	const loopStart = getDoubleWord(header.data, i+28)-start;
	const loopEnd   = getDoubleWord(header.data, i+32)-start;
	const samplingRate = getDoubleWord(header.data, i+36);
	const originPitch = header.data[i+40];
	const correction  = header.data[i+41];
	const link = getWord(header.data, i+42);
	const type = getWord(header.data, i+44);

	samples.push(new Sample(name, sampleData, loopStart, loopEnd, samplingRate, originPitch, correction, link, type));
    }
    return samples;
};

export default makeSample;

function getSampleData(sampleData, start, end){
    const smpl=sampleData.data[0];
    const sm24=sampleData.data[1];
    let int_data=new Int16Array(new Uint8Array(smpl.data.subarray(2*start, 2*end)).buffer);
    let data=new Float32Array(int_data.length);
    
    if( sm24!=null ){
        let int_sm24=new Int8Array(new Uint8Array(sm24.data.subarray(start, end)).buffer);
        for( let i=0; i<int_data.length; i++ ) data[i]=(256*int_data[i]+int_sm24[i])/(32767.*256.); // Max of int16_t*uint8_t              
    }
    else for( let i=0; i<int_data.length; i++ ) data[i]=int_data[i]/32767.; // Max of int16_t                                              
    return data;
};
