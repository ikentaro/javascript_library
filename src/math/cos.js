import Complex from './Complex.js'
import exp     from './exp.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const cos=(x)=>{
    if( typeof x==='number' ) return Math.cos(x);
    else if( x instanceof Complex ){
	const ix=mul(new Complex(0, 1), x);
	return div( add(exp(ix), exp(ix.minus())), 2);
//	throw new Error('math.cos(Complex)は未実装です');
    }
    throw new Error('! math.cos invalid argument  typeof(x)='+typeof x);
}

export default cos;

