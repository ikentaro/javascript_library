import add from '../add.js'
import sub from '../sub.js'
import mul from '../mul.js'
import pow from '../pow.js'
import div from '../div.js'
import abs from '../abs.js'
import exp from '../exp.js'

import copy from '../copy.js'
import minus from '../minus.js'
import round from '../round.js'
import Complex from '../Complex.js'

const MAX_LOOP=1000;

const dka=(a, thre=1.0e-8)=>{
//    console.log('===== solver.dka START  =====');
    a=a.map(e=> div(e, a[0]));
    const n=a.length-1;
    const pureI=new Complex(0, 1);
    const func=(x)=>{
	let sum=0;
	for( let i=0; i<a.length; i++ ){
	    sum=add(sum, mul(a[i], pow(x, n-i)));
	}
	return sum;
    }
    
    let ans0=[], ans1=[];
    const r=a.reduce((before, e)=>{ return abs(before)>abs(e) ? abs(before) : abs(e); });
    for( let i=0; i<n; i++ ){
	ans0.push(add(minus(div(a[1], n)), mul(r, exp(mul(pureI, add(div(2*i*Math.PI, n), div(1, 2*n)))))));
    }

    for( let i=0; i<n; i++ ){
	let tmp=func(ans0[i]);
	for( let j=0; j<n; j++ ){
	    if( i===j ) continue;
	    tmp=div(tmp, sub(ans0[i], ans0[j]));
	}
	ans1.push(sub(ans0[i], tmp));
    }
    
    for( let loop=0; ; loop++ ){
	for( let i=0; i<n; i++ ){
	    let tmp=func(ans0[i]);
	    for( let j=0; j<n; j++ ){
		if( i===j ) continue;
		tmp=div(tmp, sub(ans0[i], ans0[j]));
	    }
	    ans1[i]=sub(ans0[i], tmp);
	}
	
	let flag=true;
	
	for( let i=0; i<ans0.length; i++ ) if( abs(sub(ans0[i], ans1[i]))>thre ) flag=false;
	if( flag===true ) break;

	ans0=ans1.map(e=> copy(e));
	if( loop===MAX_LOOP ) throw new Error('solver.dka iteration over');
    }

//    console.log(ans1);
    //    console.log('===== solver.dka FINISH =====');
    console.log(ans1.map(e=> round(e, Math.ceil(e))));
    return ans1.map(e=> round(e, Math.ceil(e)));
}

export default dka;
