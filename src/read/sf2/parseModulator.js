import getString     from './getString.js'
import getDoubleWord from './getDoubleWord.js'
import getWord       from './getWord.js'
import getShort      from './getShort.js'

import generatorNameList from './generatorNameList.js'

const parseModulator=(data, offset)=>{
    offset*=10;
    return { modSrcOper:    getWord(data, offset),
	     generatorName: generatorNameList[getWord(data, offset+2)],
	     mount:         getShort(data, offset+4),
	     modAmtSrcOper: getWord(data, 6),
	     modTransOper:  getWord(data, 8) };
}

export default parseModulator;
