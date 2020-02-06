import sqrt from './sqrt.js'
import pow from './pow.js'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const assocLegendre=(n, m, x)=>{
    if( Number.isInteger(n)===false || n<0 ) throw new Error(`!!!!! assocLegendre(${n}, ${m} ,${x}) n should be natural number !!!!!`);
    if( Number.isInteger(m)===false )        throw new Error(`!!!!! assocLegendre(${n}, ${m} ,${x}) m should be integer !!!!!`);

//    console.log(n, m, x);
    const absM=Math.abs(m);
    if( absM>n ) return 0;
//    let val0=0, val1=pow(1-x*x, 0.5*absM)*factorial2(2*absM-1);
    let val0=0, val1=mul(pow( sub(1, mul(x,x)), 0.5*absM), factorial2(2*absM-1));
    for( let i=absM+1; i<=n; i++ ){
	const tmp=val1;
//	val1=((2*i-1)*x*val1-(i+absM-1)*val0)/(i-absM);
	val1=div(sub(mul(2*i-1, x, val1), mul(i+absM-1, val0)), i-absM);
	val0=tmp;
    }

    if( m>=0 ){
//	console.log(n, m, x, 'return', val0, val1);
	return val1;
    }
    else return mul( val1, pow(-1, absM), div(factorial(n-absM), factorial(n+absM)));
}

export default assocLegendre;

function factorial(n){
    let result=1.0;
    for( let i=n; i>0; i-- ) result*=i;
    return result;
}

function factorial2(n){
    let result=1.0;    
    for( let i=n; i>1; i-=2 ) result*=i;
//    console.log('factorial2', n, result);
    return result;
}
