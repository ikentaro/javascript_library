import add from '../add.js'
import sub from '../sub.js'
import mul from '../mul.js'
import div from '../div.js'

const simpson=(func, x0, x1, N2=10)=>{
    const N=mul(2, N2);
    const dx=div( sub(x1, x0), N);

    let even=0;
    for( let i=2; i<N; i+=2 ){
	even=add(even, func(add(x0, mul(i, dx))));
    }
    
    let odd=0;
    for( let i=1; i<N; i+=2 ){
	odd=add(odd, func(add(x0, mul(i, dx))));
    }

//    console.log(even, odd);
    return div(mul(dx, add(func(x0), mul(2, even), mul(4, odd), func(x1))), 3);
};

export default simpson;
