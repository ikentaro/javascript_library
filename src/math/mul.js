const mul=(...args)=>{
    const mul2=(a, b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a*b;
	if( typeof a.mul==='function' ) return a.mul(b);
	if( typeof b.mul==='function' ) return b.mul(a);

	console.log('a =', a, 'b =', b);
	throw new Error('! math.mul invalid argument');
    }
    
    return args.reduce((acc, a)=> mul2(acc, a));
}

export default mul;
