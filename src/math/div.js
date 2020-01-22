import Vector from './Vector.js'

const div=(...args)=>{
    const div2=(a,b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a/b;
	else if( typeof a.div==='function' ) return a.div(b);
	else if( typeof b.mul==='function' && typeof b.reverse==='function' ) return b.reverse().mul(a);
	else if( Array.isArray(a) && a.every(b=> typeof b==='number') && typeof b=='number') return new Vector(...a.map(a=> a/b));
	console.log('a=', a);
	console.log('a.every', a.every(b=> typeof b==='number'));
	console.log('b=', b);
	console.log('b=', typeof(b));
	throw new Error('! math.div invalid parameter');
    }

    return args.reduce((acc, a)=> div2(acc, a));
}

export default div;
