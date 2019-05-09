import add from '../add.js'
import sub from '../sub.js'
import mul from '../mul.js'
import div from '../div.js'

const trapezoid=(func, x0, x1, N=1000)=>{    
    const dx=div(sub(x1, x0), N);
 
    let sum=0;
    let xmin=x0, xmax;
    for( let i=0; i<N; i++ ){
	xmax=add(x0, mul(i+1, dx));
//	console.log(xmin, xmax, func(xmin), func(xmax));
	
	sum=add(sum, mul(add(func(xmax), func(xmin)), dx, 0.5));
	xmin=xmax;
    }
    return sum;
}

export default trapezoid;
