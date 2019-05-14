import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import copy from './copy.js'
import Vector from './Vector.js'
import sweepOut from './Matrix/sweepOut.js'
import toString from './Matrix/toString.js'
import isComplex from './isComplex.js'

import leverrirFaddev from './Matrix/leverrirFaddev.js'
import bairstow from './solver/bairstow.js'
import dka from './solver/dka.js'

const Matrix=class extends Array{
    constructor(...args){
	super(...args);
    }

    get colSize(){ return this[0].length; };
    get rawSize(){ return this.length; };

    colVector(i){ return new Vector(...this[i]); };
    rawVector(i){ return new Vector(...this.map((a, j, arr)=> a[i])); };
    tr(){ return this.reduce((sum, e, i)=> add(sum, e[i]), 0); };
    
    eigenAll(){
	const params=leverrierFaddev(this);
	//	bairstow(params);
	dka(params);
//	throw new Error('! Matrix.eigenAll temp STOP');
    }
    
    mul(mat){
	if( typeof mat ==='number' ) return new Matrix(...this.map(raw=> raw.map(e=> mul(mat, copy(e))))); 
	if( mat instanceof Vector && this.rawSize===mat.length )  return new Vector(...this.map((a, i , arr)=> mul(arr.colVector(i), mat)));
	if( mat instanceof Matrix && this.rawSize===mat.colSize )
	    return new Matrix(...this.map((a, i, arr)=> mat[0].map((b, j, arr2)=> mul(arr.colVector(i), mat.rawVector(j)))));

	throw new Error('! Matrix.mul invalid argument  typeof(mat)='+typeof mat);
    }
    
    add(mat){
	if( mat instanceof Matrix && this.colSize===mat.colSize && this.rawSize===mat.colSize ){
	    return new Matrix(...this.map((a, i)=> a.map((b, j)=> add(b, mat[i][j]))));
	}
	throw new Error('! Matrix.add invalid argument  typeof(mat)='+typeof mat);
    }

    sub(mat){
	if( mat instanceof Matrix && this.colSize===mat.colSize && this.rawSize===mat.colSize ){
	    return new Matrix(...this.map((a, i)=> a.map((b, j)=> sub(b, mat[i][j]))));
	}
	throw new Error('! Matrix.sub invalid argument  typeof(mat)='+typeof mat);
    }

    reverse(method='sweepOut'){
	if( method==='sweepOut' ) return sweepOut(this);
    }
    
    copy(){ return new Matrix(...this.map(raw=> raw.map(e=>copy(e)))); };
    toString(){ return toString(this); };
    isSquare(){ return this.colSize===this.rawSize; }
    isComplex(){ return this.one(raw=> raw.one(e=> isComplex(e))); }
};

export default Matrix;
