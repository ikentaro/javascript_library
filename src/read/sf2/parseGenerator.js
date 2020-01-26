import getString     from './getString.js'
import getDoubleWord from './getDoubleWord.js'
import getWord       from './getWord.js'

import generatorNameList from './generatorNameList.js'

const parseGenerator=(data, offset)=>{
    offset*=4;
    const id=getWord(data, offset);
    if( id<0 || generatorNameList.length<id ) throw new Error('!!!!! SoundFont2 Invaild Generator ID = '+id+'!!!!!');
    const name=generatorNameList[id];

    if( name==='vel_range' || name==='key_range' ) return [ name, [ data[offset+2], data[offset+3] ] ];
    else return [ name, getWord(data, offset+2) ];
}

export default parseGenerator;
