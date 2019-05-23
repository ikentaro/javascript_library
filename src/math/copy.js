const copy=(x)=>{
    if( typeof x.copy==='function' ) return x.copy(x);
    if( typeof x!=='object' ) return x;
    if( Array.isArray(x) ) return x.map(a=> copy(a));

    throw new Error('! math.copy invalid argument  typeof(x)='+typeof x);
}

export default copy;
