const mul=(...args)=>{
    
    const mul2=(a, b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a*b;
	if( typeof a.mul==='function' ) return a.mul(b);
	if( typeof b.mul==='function' ) return b.mul(a);

	throw new Error('! math.mul invalid argument');
    }
    
    return args.reduce((acc, a)=> mul2(acc, a), 1);
}

export default mul;
