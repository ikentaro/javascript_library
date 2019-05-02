window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== solver test START =====');
    console.log('x*x-2=0  ans=', math.solver.bisection((x)=> x*x-2, 0, 2), '  by bisection');
    
    console.log('===== solver test FINISH =====');
});
