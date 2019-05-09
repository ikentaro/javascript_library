const isFinite=(x)=>{
    if( typeof x==='number' ) return Number.isFinite(x);
    if( typeof x.isFinite==='function' ) return x.isFinite();

    throw new Error('! math.isFinite invalid argument  typeof(x)='+typeof x);
}

export default isFinite;
