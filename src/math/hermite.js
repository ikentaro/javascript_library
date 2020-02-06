import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const hermite=(n, x)=>{
    if( Number.isInteger(n)===false || n<0 ) throw new Error(`!!!!! hermite(${n}, ${x}) n should be natural number !!!!!`);
    if( x!=null ){
        if( n===0 ) return 1;
        else if( n===1 ) return mul(2, x);
        else{
            let val0=1, val1=mul(2, x);
            for( let i=0; i<n-1; i++ ){
                let tmp=val1;
		val1=mul(2, sub( mul(x, val1), mul(i, val0)));
                val0=tmp;
            }
            return val1;
        }
    }
}

export default hermite;
