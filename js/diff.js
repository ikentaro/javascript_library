window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== diff test START =====');
    for( let x=0; x<Math.PI; x+=0.1 ){
	console.log('x =',x, ' cos(z) =', Math.cos(x), ' dsin(z) =', math.diff.central(Math.sin, x));	
    }
    
    console.log('===== diff test FINISH =====');
});
