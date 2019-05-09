import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import Vector from './Vector.js'
import sweepOut from './Matrix/sweepOut.js'

const Matrix=class extends Array{
    constructor(...args){
	super(...args);
    }

    get colSize(){ return this[0].length; };
    get rawSize(){ return this.length; };

    colVector(i){ return new Vector(...this[i]); };
    rawVector(i){ return new Vector(...this.map((a, j, arr)=> a[i])); };

    mul(mat){
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
};

export default Matrix;
