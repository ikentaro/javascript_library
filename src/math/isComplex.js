const isComplex=(x)=>{
    if( typeof x==='number' ) return false;
    if( typeof x.isComplex ) return x.isComplex();

    throw new Error('! math.isComplex invalid error  typeof(x)='+typeof x);
}

export default isComplex;
