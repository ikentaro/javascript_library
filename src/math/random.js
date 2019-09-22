import LCG  from './random/LCG.js'
import dump from './random/dump.js';

const lgc=new LCG(1664525, 1013904223, Math.pow(2.0, 32));

const random={
    get lgc(){ return lgc; },
    dump: ()=>{ dump(lgc); },
}

export default random;
