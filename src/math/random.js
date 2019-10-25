import LCG   from './random/LCG.js'
import dump  from './random/dump.js';
import gauss from './random/gauss.js';

const lgc=new LCG(1664525, 1013904223, Math.pow(2.0, 32));
let engine=lgc;

const random={
    get lgc(){ return lgc; },
    zeroToOne(){ return engine.zeroToOne(); },
    dump: ()=>{ dump(engine); },

    gauss: (mean, sigma)=>{ return gauss(engine, mean, sigma); },
}

export default random;
