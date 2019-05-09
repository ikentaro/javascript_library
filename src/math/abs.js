const abs=(x)=>{
    if( typeof x==='number' ) return Math.abs(x);
    
    const abs=x.abs;
    if( typeof abs==='function' ) return abs();
    if( abs!=null ) return abs;

    throw new Error('! math.abs invalid argument  typeof(x)='+typeof x);
}

export default abs;
