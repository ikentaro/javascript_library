import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'

const diff={
    forward: (func, x, dx=1.0e-8)=>{ return div(sub(func(add(x, dx)), func(x)), dx); },
    central: (func, x, dx=1.0e-8)=>{ return div(sub(func(add(x, dx)), func(sub(x, dx))), mul(2, dx)); },
    backward: (func, x, dx=1.0e-8)=>{ return div(sub(func(add(x)), func(sub(x, dx))), dx); },
}

export default diff;
