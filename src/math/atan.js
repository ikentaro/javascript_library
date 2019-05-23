import Complex from './Complex.js'
import exp from './exp.js'
import log from './log.js'
import sqrt from './sqrt.js'
import minus from './minus.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const atan=(x)=>{
    if( typeof x==='number' ) return Math.atan(x);
    if( x instanceof Complex ){
        const pureI=new Complex(0, 1);
	return mul(0.5, pureI, log(div(add(pureI, x), sub(pureI, x))));
    }

    throw new Error('! math.atan invalid argument  typeof(x)='+typeof x);
}

export default atan;
