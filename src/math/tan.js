import Complex from './Complex.js'
import cos from './cos.js'
import sin from './sin.js'

import div from './div.js'

const tan=(x)=>{
    if( typeof x==='number' ) return Math.tan(x);
    else if( x instanceof Complex ){
	return div(sin(x), cos(x));
	throw new Error('math.tan(Complex)は未実装です');
    }
    throw new Error('! math.tan(x) invalid argument  typeof(x)'+typeof x);
}

export default tan;
