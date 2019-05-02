const reverse=(x)=>{
    if( typeof x==='number' ) return 1/x;
    if( x.reverse==='function' ) return x.reverse();

    throw new Error('! math.reverse invalid argument   typeof('+typeof(x)+')');
}

export default reverse;
