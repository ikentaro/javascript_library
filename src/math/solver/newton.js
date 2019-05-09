import diff from '../diff.js'

const MAX_LOOP=100;

const newton=(func, x0, thre=1.0e-10)=>{
    let y0=func(x0);
    let x1=x0-y0/diff.central(func, x0);
    let y1=func(x1);
    
    for( let i=0; ; i++ ){
	x0=x1;
	y0=y1;
	x1=x0-y0/diff.central(func, x0);
	y1=func(x1);

//	console.log(`x0=${x0} x1=${x1}`);
	
	if( Math.abs(x0-x1)<thre ) break;
	
	if( i===MAX_LOOP )  throw new Error(`solver.bisection iteration=${MAX_LOOP} over`);
    }
    return x1;
}

export default newton;
