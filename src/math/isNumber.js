const isNumber=(x)=>{
    if( typeof x==='number' ) return Math.isNumber(x);
    if( typeof x.isNumber==='function' ) return Math.isNumber();

    throw new Error('! math.isNumber invalid argument  typeof(x)='+typeof x);
}

export default isNumber;
