import Complex from './Complex.js'

const exp=(x)=>{
    if( typeof x==='number' ) return Math.exp(x);
    else if( x instanceof Complex ){
	const abs=Math.exp(x.real);
	return new Complex(abs*Math.cos(x.imag), abs*Math.sin(x.imag));
    }
    throw new Error('! math.exp invalid argument');    
}

export default exp;
