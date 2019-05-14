const toString=(z)=>{
    const MIN=1.0e-8;
    let str= Math.abs(z.real)<MIN ? '': z.real.toFixed(3);
    
    if( Math.abs(z.imag)<MIN ){}
    else if( z.imag<0 ) str+=z.imag.toFixed(3)+'i';
    else str+='+'+z.imag.toFixed(3)+'i';

    return str;
}

export default toString;
