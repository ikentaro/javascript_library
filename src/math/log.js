import Complex from './Complex.js'
import exp from './exp'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const log=(x)=>{
    if( typeof x==='number' ) return Math.log(x);
    if( x instanceof Complex ){
	return new Complex(Math.log(x.r), x.arg);
    }

    throw new Error('! math.log invalid argument  typeof(x)='+typeof x);
}

export default log;
