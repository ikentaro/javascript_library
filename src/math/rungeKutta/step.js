import add from '../add.js'
import sub from '../sub.js'
import div from '../div.js'
import mul from '../mul.js'

const step=(func, args, delta=1.0e-8)=>{
    if( typeof func==='function' && Array.isArray(args) ){
	const k1=func(...args);
	// console.log('==== k1 ===========');
	// k1.forEach((a, i)=>{ console.log(i, a) });
	// console.log('===================');
	
	const k2=func(...args.map((a, i)=> add(a, mul(0.5, delta, k1[i]))));
	// console.log('==== k2 ===========');
	// k2.forEach((a, i)=>{ console.log(i, a) });	
	// console.log('===================');
	
	const k3=func(...args.map((a, i)=> add(a, mul(0.5, delta, k2[i]))));
	// console.log('==== k3 ===========');
	// k3.forEach((a, i)=>{ console.log(i, a) });
	// console.log('===================');
	
	const k4=func(...args.map((a, i)=> add(a, mul(delta, k3[i])))); 
	// console.log('==== k4 ==========');
	// k4.forEach((a, i)=>{ console.log(i, a) });
	// console.log('===================');

	// console.log('==== Runge-Kutta step result =====');
	// args.map((a, i)=> add(a, div(mul(delta, add(k1[i], mul(2, k2[i]), mul(2, k3[i]), k4[i])), 6))).forEach((a, i)=>{ console.log(i, a) });
	// console.log('==================================');
	return args.map((a, i)=> add(a, div(mul(delta, add(k1[i], mul(2, k2[i]), mul(2, k3[i]), k4[i])), 6)));
    }

    throw new Error('! math.rungeKutta.setp Invalid argument !');
}

export default step;
