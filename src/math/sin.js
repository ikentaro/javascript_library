import Complex from './Complex.js'
import exp from './exp'

import add from	'./add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const sin=(x)=>{
    if( typeof x==='number' ) return Math.sin(x);
    else if( x instanceof Complex ){
	const ix=mul(new Complex(0, 1), x);
	return div( sub(exp(ix), exp(ix.minus())), mul(2, new Complex(0, 1)));
//	throw new Error('math.sin(Complex)は未実装です');
    }
    throw new Error('! math.sin invalid argument  typeof(x)='+typeof(x));
}

export default sin;
