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
import log from './math/log.js'
import asin from './math/asin.js'
import acos from './math/acos.js'
import atan from './math/atan.js'
import sinh from './math/sinh.js'
import cosh from './math/cosh.js'

import legendre from './math/legendre.js'
import hermite  from './math/hermite.js'
import laguerre from './math/laguerre.js'
import assocLegendre from './math/assocLegendre.js'
import assocLaguerre from './math/assocLaguerre.js'
import sphereBessel from './math/sphereBessel.js'

import diff     from './math/diff.js'
import integral from './math/integral.js'
import solver   from './math/solver.js'

import rungeKutta from './math/rungeKutta.js'
import eulr       from './math/eulr.js'

import random from './math/random.js'
import fit    from './math/fit.js'

const math={
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
    pow: pow,
    log: log,
    asin: asin,
    acos: acos,
    atan: atan,
    sinh: sinh,
    cosh: cosh,
    
    legendre: legendre,
    hermite:  hermite,
    laguerre: laguerre,
    assocLegendre: assocLegendre,
    assocLaguerre: assocLaguerre,
//    sphereBessel: sphereBessel,  // 0<x<10で発振がある
     
    diff: diff,
    integral: integral,
    solver: solver,

    rungeKutta: rungeKutta,
    eulr:   eulr,
    random: random,
    fit:    fit,

    vector: (...args)=>{ return new Vector(...args); },
    matrix: (...args)=>{ return new Matrix(...args); },
    makeMatrix: (colSize, rawSize)=>{ return makeMatrix(colSize, rawSize); },
    unitMatrix: (size)=>{ return unitMatrix(size); },
    complex: (re=0.0, im=1.0)=>{ return new Complex(re, im); },
}

window.math=window.math || math;

if( window.math===math ) console.log('>>>>> math Module Loaded <<<<<');


