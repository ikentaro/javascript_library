const minus=(x)=>{
    if( typeof x==='number' ) return -x;
    if( typeof x.minus==='function' ) return x.minus();
    
    throw new Error('! math.minus invalid argument   typeof('+typeof(x)+')');
}

export default minus;
