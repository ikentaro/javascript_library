import add from '../add.js'
import sub from '../sub.js'
import div from '../div.js'
import mul from '../mul.js'

const step=(func, args, delta=1.0e-8)=>{
    if( typeof func==='function' && Array.isArray(args) ){
	const k1=func(...args);
	const k2=func(...args.map((a, i)=> add(a, mul(0.5, delta, k1[i]))));
	const k3=func(...args.map((a, i)=> add(a, mul(0.5, delta, k2[i]))));
	const k4=func(...args.map((a, i)=> add(a, mul(delta, k3[i])))); 

	return args.map((a, i)=> add(a, div(mul(delta, add(k1[i], mul(2, k2[i]), mul(2, k3[i]), k4[i])), 6)));
    }

    throw new Error('! math.rungeKutta.setp Invalid argument !');
}

export default step;
