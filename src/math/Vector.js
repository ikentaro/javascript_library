import copy from './copy.js'
import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import conj from './conj.js'
import Matrix from './Matrix.js'
import isComplex from './isComplex.js'

const Vector=class extends Array{
    constructor(...args){
	super(...args);
    }

    get length(){ return this.length; }
    abs2(){ return this.reduce((sum, e)=> add(sum, mul(e, conj(e)))); };
    abs(){ return Math.sqrt(this.abs2()); };

    copy(){ return new Vector(...this.map(a=> copy(a))); };
    add(a){
	if( a instanceof Vector && this.length===a.length ) return this.map((e, i)=> add(e, a[i]));
	
	throw new Error('! Vector.add(a)  invalid parameter  typeof(a)='+typeof a);
    }

    sub(a){
	if( a instanceof Vector && this.length===a.length ) return this.map((e, i)=> sub(e, a[i]));
	
	throw new Error('! Vector.sub(a)  invalid parameter  typeof(a)='+typeof a);
    }
    mul(a){
	if( typeof a==='number' ) return this.map(e=> mul(e, a));
	if( a instanceof Vector && this.length===a.length ) return this.reduce((sum, e, i)=> add(sum, mul(e, a[i])), 0);
	if( a instanceof Matrix && this.length===a.colSize ) return a[0].map((e, i)=> mul(this, a.rawVector(i)));
	
	throw new Error('! Vector.mul(a)  invalid parameter  typeof(a)='+typeof a);
    }

    isComplex(){ return this.one(e=> isComplex(e)); }
};

export default Vector;
