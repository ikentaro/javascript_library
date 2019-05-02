const pow=(x, n)=>{
    if( typeof x==='number' && typeof n==='number' ) return Math.pow(x, n);
    if( x instanceof Complex && typeof n==='number' ){
	const r=x.r*n;
	const arg=x.arg*n;
	return new Complex(r*Math.cos(arg), r*Math.sin(arg));
    }
    
    throw new Error('! math.pow invalied arguments');
}
