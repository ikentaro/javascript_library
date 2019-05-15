import Complex from './math/Complex.js'
import Vector from './math/Vector.js'
import Matrix from './math/Matrix.js'
import makeMatrix from './math/makeMatrix.js'
import unitMatrix from './math/unitMatrix.js'

import minus from './math/minus.js'
import reverse from './math/reverse.js'
import isNumber from './math/isNumber.js'
import isFinite from './math/isFinite.js'

import add from './math/add.js'
import sub from './math/sub.js'
import mul from './math/mul.js'
import div from './math/div.js'

import abs from './math/abs.js'
import exp from './math/exp.js'
import sin from './math/sin.js'
import cos from './math/cos.js'
import tan from './math/tan.js'
import pow from './math/pow.js'

import diff     from './math/diff.js'
import integral from './math/integral.js'
import solver   from './math/solver.js'

window.math=window.math || {
    minus: minus,
    reverse: reverse,
    isNumber: isNumber,
    isFinite: isFinite,
    
    add: add,
    sub: sub,
    mul: mul,
    div: div,

    abs: abs,
    exp: exp,
    sin: sin,
    cos: cos,
    tan: tan,
    pow, pow,

    diff: diff,
    integral: integral,
    solver: solver,

    vector: (...args)=>{ return new Vector(...args); },
    matrix: (...args)=>{ return new Matrix(...args); },
    makeMatrix: (colSize, rawSize)=>{ return makeMatrix(colSize, rawSize); },
    unitMatrix: (size)=>{ return unitMatrix(size); },
    complex: (re=0.0, im=1.0)=>{ return new Complex(re, im); },
}

console.log('===== math module print =====');
console.log(window.math);
