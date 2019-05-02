const div=(...args)=>{
    const div2=(a,b)=>{
	if( typeof a==='number' && typeof b==='number' ) return a/b;
	else if( typeof a.div==='function' ) return a.div(b);
	else if( typeof b.mul==='function' && typeof b.reverse==='function' ) return b.reverse().mul(a);

	throw new Error('! math.dev invalid parameter');
    }

    return args.reduce((acc, a)=> div2(acc, a));
}

export default div;
