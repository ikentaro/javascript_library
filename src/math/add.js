const add=(...args)=>{
    
    const add2=(a, b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a+b;
	if( typeof a.add==='function' ) return a.add(b);
	if( typeof b.add==='function' ) return b.add(a);

	throw new Error('! math.add invalid argument');
    }
    
    return args.reduce((acc, a)=> add2(acc, a), 0);
}

export default add;
