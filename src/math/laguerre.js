import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const laguerre=(n, x)=>{
    if( Number.isInteger(n)===false || n<0 ) throw new Error(`!!!!! lagueree(${n}, ${x}) n should be natural number !!!!!`);
    if( x!=null ){
//        if( n===0 ){ console.log('aaa'); return 1; }
	if( n===0 ) return 1; 
	else if( n===1 ) return sub(1, x);
	else{
	    let val0=1, val1=sub(1, x);
//	    console.log(x, val0, val1);
	    for( let i=0; i<n-1; i++ ){
		let tmp=val1;
		val1=(2*i+3-x)*val1-(i+1)*(i+1)*val0;
//		val1=sub(mul(sub(2*i+1, x), val1), mul(i*i, val0));
		val0=tmp;
	    }
//	    console.log(val1);
	    return val1;
	}
    }
}

export default laguerre;
