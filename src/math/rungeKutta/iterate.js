import step from './step.js'

const iterate=(func, args, n, delta=1.0e-8)=>{
    let next=args;
    for( let i=0; i<n; i++ ){
	next=step(func, next, delta);
//	console.log('ite', i, ' next :',next);
    }
    return next;
}

export default iterate;
