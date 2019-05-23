import minus from '../minus.js'
import sqrt from '../sqrt.js'
import add from '../add.js'
import sub from '../sub.js'
import mul from '../mul.js'
import div from '../div.js'
import abs from '../abs.js'

const bairstow=(a, thre=1.0e-10)=>{
    console.log('===== Bairstow START  =====');
    if( a.length<=1 ) throw new Error('! solver.bairstow invalid a.length shold be 2');
    if( a.length===2 ) return [ div(minus(a[1]), a[0]) ];
		 
    const ans=[];
    let p=1, q=1;
    let b=[], c=[];

    b.push(a[0]);
    c.push(b[0]);
    b.push(sub(a[1], mul(p, b[0])));
    c.push(sub(b[1], mul(p, c[0])));
    for( let i=2; i<a.length; i++ ){
	b.push(sub(a[i], mul(p, b[i-1]), mul(q, b[i-2])));
	c.push(sub(b[i], mul(p, c[i-1]), mul(q, c[i-2])));
    }
    
    let D=sub(mul(c[a.length-3], c[a.length-3]), mul(c[a.length-4], sub(c[a.length-2], b[a.length-2])));
    let delta_p=div(sub(mul(b[a.length-2], c[a.length-3]), mul(b[a.length-1], c[a.length-4])), D);
    let delta_q=div(sub(mul(b[a.length-1], c[a.length-3]), mul(b[a.length-2], sub(c[a.length-2], b[a.length-2]))), D);
    while( a.length>0 ){
	if( a.length===2 ){
	    ans.push(div(minus(a[1]), a[0]));
	    a=[];
	    break;
	}
	else if( a.length===3 ){
	    const D=sqrt(sub(mul(a[1], a[1]), mul(4,a[0],a[2])));
	    ans.push(div(add(minus(a[1]), D), 2, a[2]));
	    ans.push(div(sub(minus(a[1]), D), 2, a[2]));
	    a=[];
	    break;
	}
	
	//    console.log('delta_p', delta_p, ' delta_q', delta_q);
	while( abs(delta_p)>thre || abs(delta_q)>thre ){
	    p=add(p, delta_p);
	    q=add(q, delta_q);
	    
	    b[1]=sub(a[1], mul(p, b[0]));
	    c[1]=sub(b[1], mul(p, c[0]));
	    for( let i=2; i<a.length; i++ ){
		b[i]=sub(a[i], mul(p, b[i-1]), mul(q, b[i-2]));
		c[i]=sub(b[i], mul(p, c[i-1]), mul(q, c[i-2]));
	    }
	    
	    D=sub(mul(c[a.length-3], c[a.length-3]), mul(c[a.length-4], sub(c[a.length-2], b[a.length-2])));
	    delta_p=div(sub(mul(b[a.length-2], c[a.length-3]), mul(b[a.length-1], c[a.length-4])), D);
	    delta_q=div(sub(mul(b[a.length-1], c[a.length-3]), mul(b[a.length-2], sub(c[a.length-2], b[a.length-2]))), D);
	    console.log('delta_p', delta_p, ' delta_q', delta_q);
	}
	console.log('p=', p, ' q=', q);
	const D2=sqrt(sub(mul(p, p), mul(4, q)));
	ans.push(div(add(minus(p), D2), 2));
	ans.push(div(sub(minus(p), D2), 2));
	console.log(ans);
	a=b.slice(0, -2);

//	throw new Error('! temp');
    }
    console.log('===== Bairstow FINISH =====');

    console.log(ans);
    return ans;
}

export default bairstow;
