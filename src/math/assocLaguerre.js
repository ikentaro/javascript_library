import sqrt  from './sqrt.js'
import pow   from './pow.js'
import minus from './minus.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const assocLaguerre=(n, m, x)=>{
    if( Number.isInteger(m)===false || n<0 ) throw new Error(`!!!!! assocLaguerre(${n}, ${m} ,${x}) n should be natural number !!!!!`);
    if( Number.isInteger(n)===false || m<0 ) throw new Error(`!!!!! assocLaguerre(${n}, ${m} ,${x}) m should be natural number !!!!!`);

    let val0=1, val1=sub(m+1, x);
    if( n===0 ) return val0;
    if( n===1 ) return val1;
    for( let i=2; i<=n; i++ ){
    	const tmp=val1;
	//	val1=((2*i+m-1-x)*val1-(i+m-1)*val0)/i;
	val1=div(sub(mul(sub(2*i+m-1, x), val1), mul(i+m-1, val0)), i);
    	val0=tmp;
    }
    return val1;
    
    // Σによる計算、高次には発振がある
    // let result=0;
    // for( let i=0; i<=n; i++ ) result=add(result, mul(factorial(n+m)/(factorial(m+i)*factorial(n-i)*factorial(i)), pow(minus(x), i)));
    // return result;
}

export default assocLaguerre;

function factorial(n){
    let result=1.0;
    for( let i=n; i>0; i-- ) result*=i;
    return result;
}
