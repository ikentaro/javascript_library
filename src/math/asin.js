import Complex from './Complex.js'
import exp from './exp.js'
import log from './log.js'
import sqrt from './sqrt.js'
import minus from './minus.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const asin=(x)=>{
    if( typeof x==='number' ) return Math.asin(x);
    if( x instanceof Complex ){
	const pureI=new Complex(0, 1);
	return mul(minus(pureI), log(add(sqrt(sub(1, mul(x, x))), mul(pureI, x))));
    }

    throw new Error('! math.asin invalid argument  typeof(x)='+typeof x);
}

export default asin;
