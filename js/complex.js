window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== math.complex test START =====');
    const z=math.complex(1, 1), z2=math.complex(1, 2);
    console.log('z  =', z.toString());
    console.log('z2 =', z2.toString());
    console.log(z.reverse().toString());
    console.log(z.add(z2).toString());
    console.log(z.sub(z2).toString());
    console.log(z.mul(z2).toString());
    console.log('z+1+z2+3 =', math.add(z, 1, z2, 3).toString());
    console.log(z2.mul(z2.reverse()).toString());

    console.log(math.div(z, z2).toString());
    // 1.4686939399158851+2.2873552871788423j 
    console.log('exp(z)  =', math.exp(z).toString());
    // -1.1312043837568135+2.4717266720048188j
    console.log('exp(z2) =', math.exp(z2).toString());
    
    const f1=(x)=>{ return math.add(math.mul(math.cos(x), math.cos(x)), math.mul(math.sin(x), math.sin(x))); };
    console.log('cos^2(x)+sin^2(x)=', f1(1).toString());
    console.log('cos^2(x)+sin^2(x)=', f1(z).toString());
    console.log('cos^2(x)+sin^2(x)=', f1(z2).toString());

    const f2=(x)=>{ return math.sub(math.div(1, math.mul(math.cos(x), math.cos(x))), math.mul(math.tan(x), math.tan(x))); }
    console.log('1/cos^2(x)-tan^2(x)=', f2(1).toString());
    console.log('1/cos^2(x)-tan^2(x)=', f2(z).toString());
    console.log('1/cos^2(x)-tan^2(x)=', f2(z2).toString());
    console.log('===== math.complex test FINISH =====');
});
