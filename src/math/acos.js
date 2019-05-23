import Complex from './Complex.js'
import exp from './exp.js'
import log from './log.js'
import sqrt from './sqrt.js'
import minus from './minus.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const acos=(x)=>{
    if( typeof x==='number' ) return Math.acos(x);
    if( x instanceof Complex ){
        const pureI=new Complex(0, 1);
        return mul(minus(pureI), log(add(mul(pureI, sqrt(sub(1, mul(x, x)))), x)));
    }

    throw new Error('! math.asin invalid argument  typeof(x)='+typeof x);
}

export default acos;
