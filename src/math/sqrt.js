import Complex from './Complex.js'

const sqrt=(x)=>{
    if( typeof x==='number' && x>=0 ) return Math.sqrt(x);
    if( typeof x==='number' && x<0 ) return new Complex(0, Math.sqrt(-x));
    if( x instanceof Complex ){
        const r=Math.pow(x.r, 0.5);
        const arg=x.arg*0.5;
        return new Complex(r*Math.cos(arg), r*Math.sin(arg));
    }

    throw new Error('! math.sqrt invalied arguments');
}

export default sqrt;
