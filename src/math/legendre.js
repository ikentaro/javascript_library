const legendre=(n, x)=>{
    if( Number.isInterger(n)===false || n<0 ) throw new Error(`!!!!! lgendre(${n}, ${x}) n should be natural number !!!!!`);    
    if( x!=null ){
	if( n===0 ) return 0;
	else if( n===1 ) return x;
	else{
	    let val0=0, val1=x;
	    let val2=val0+val1;
	}
    }
}

export default legendre;
