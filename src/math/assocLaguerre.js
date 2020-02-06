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

    let result=0;
    for( let i=0; i<=n; i++ ) result=add(result, mul(factorial(n+m)/(factorial(m+i)*factorial(n-i)*factorial(i)), pow(minus(x), i)));
    return result;
}

export default assocLaguerre;

function factorial(n){
    let result=1.0;
    for( let i=n; i>0; i-- ) result*=i;
    return result;
}
