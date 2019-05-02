const toString=(z, config)=>{
    const MIN=1.0e-8;
    let str= Math.abs(z.real)<MIN ? '': z.real.toString();
    
    if( Math.abs(z.imag)<MIN ){}
    if( z.imag<0 ) str+=z.imag+'i';
    else str+='+'+z.imag+'i';

    return str;
}

export default toString;
