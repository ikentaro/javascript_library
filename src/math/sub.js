const sub=(...args)=>{

    const sub2=(a, b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a-b;
	if( typeof a.sub==='function' ) return a.sub(b);
	if( typeof b.add==='function' && typeof b.minus==='function' ) return b.minus().add(a);

	throw new Error('! math.sub invalid argument');
    }

    return args.reduce((acc, a)=> sub2(acc, a));
}

export default sub;
