import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const legendre=(n, x)=>{
    if( Number.isInteger(n)===false || n<0 ) throw new Error(`!!!!! lgendre(${n}, ${x}) n should be natural number !!!!!`);    
    if( x!=null ){
	if( n===0 ) return 1;
	else if( n===1 ) return x;
	else{
	    let val0=1, val1=x;
	    for( let i=0; i<n-1; i++ ){
		let tmp=val1;
		val1=div(sub( mul(val1, x, 2*i+1), mul(i, val0)), i+1);
//		val1=(val1*x*(2*i+1)-i*val0)/(i+1);
		val0=tmp;
	    }
	    return val1;
	}
    }
}

export default legendre;
