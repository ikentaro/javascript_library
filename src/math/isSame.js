const isSame=(a, b, thre=1.0e-8)=>{
    if( typeof a==='number' && typeof b==='number' ) return Math.abs(a-b)<thre;
    if( typeof a.isSame==='function' ) return a.isSame(b, thre);
    if( typeof b.isSame==='function' ) return b.isSame(a, thre);

    throw new Error('! math.isSame invalid arguments');
}

export default isSame;
