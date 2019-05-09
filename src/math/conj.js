const conj=(x)=>{
    if( typeof x==='number' ) return x;
    if( typeof x.conj==='function' ) return x.conj();
    
    throw new Error('! math.conj(x) invalid parameter  typeof(x)='+typeof x);
}

export default conj;
