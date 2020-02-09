window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== integral test START =====');
    for( let x=0.1; x<Math.PI; x+=0.1 ){
        console.log('x =',x, ' sin(z) =', Math.sin(x), ' dsin(z) =', math.integral.simpson(Math.cos, 0, x));
    }

    const z0=math.complex(-1, -1), z1=math.complex(1, -1), z2=math.complex(1, 1), z3=math.complex(-1, 1);
    const func=(x)=>{ return math.div(1, x); };
    let sum=math.integral.simpson(func, z0, z1);
    sum=math.add(sum, math.integral.simpson(func, z1, z2));
    sum=math.add(sum, math.integral.simpson(func, z2, z3));
    sum=math.add(sum, math.integral.simpson(func, z3, z0));
    console.log('Res(1/z)=', sum);

    console.log(math.integral.de);
    console.log(math.integral.de.infToInf(x=> 1/(1+x**2)), Math.PI);
    console.log(math.integral.de.infToInf(x=> Math.exp(-x*x)), Math.sqrt(Math.PI));

    console.log(math.integral.de.zeroToInf(x=> 1/(x**2+Math.sqrt(x))), 4*Math.sqrt(3)*Math.PI/9);
//    console.log(math.integral.de.zeroToInf(x=> Math.sin(x*x)), Math.sqrt(Math.PI/8));
    console.log('===== integral test FINISH =====');
});
