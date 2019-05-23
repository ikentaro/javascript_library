import add from '../add.js'
import sub from '../sub.js'
import mul from '../mul.js'
import div from '../div.js'
import abs from '../abs.js'
import sin from '../sin.js'
import cos from '../cos.js'
import pow from '../pow.js'
import isSame from '../isSame.js'
import minus from '../minus.js'
import unitMatrix from '../unitMatrix.js'

const MAX_LOOP=100;

const jacobi=(origin, thre=1.0e-8)=>{
//    console.log(origin.toString());
    if( origin.isSymmetric()===false ) throw new Error('! Matrix.jacobi should be symmetric matrix');
    const mat=origin.copy();
//    console.log('===== Matrix.jacobi START  =====');

    let A=unitMatrix(origin.colSize);
    for( let count=0; ; count++ ){
	const [ p, q ]=maxIndex(mat);
	const theta= isSame(mat[p][p], mat[q][q]) ? Math.PI/4 : mul(0.5, Math.atan(div(mul(-2, mat[p][q]), sub(mat[p][p], mat[q][q]))));

	const AA=unitMatrix(A.colSize);
	AA[p][p]=cos(theta); AA[q][q]=cos(theta); AA[p][q]=sin(theta); AA[q][p]=minus(sin(theta));
	A=mul(A, AA);
	const praw=mat.rawVector(p), qraw=mat.rawVector(q), pcol=mat.colVector(p), qcol=mat.colVector(q);
	for( let i=0; i<mat.colSize; i++ ){
	    if( i!==p && i!==q ){
		mat[p][i] = sub(mul(pcol[i], cos(theta)), mul(qcol[i], sin(theta)));
		mat[q][i] = add(mul(pcol[i], sin(theta)), mul(qcol[i], cos(theta)));
		mat[i][p] = sub(mul(praw[i], cos(theta)), mul(qraw[i], sin(theta)));
		mat[i][q] = add(mul(praw[i], sin(theta)), mul(qraw[i], cos(theta)));
	    }
	    mat[p][p]=add(mul(praw[p], pow(cos(theta), 2)), mul(qraw[q], pow(sin(theta), 2)), mul(-2, praw[q], sin(theta), cos(theta)));
	    mat[q][q]=add(mul(praw[p], pow(sin(theta), 2)), mul(qraw[q], pow(cos(theta), 2)), mul( 2, praw[q], sin(theta), cos(theta)));
	}
	mat[p][q]=0;	
	mat[q][p]=0;
//	mat[p][q]=add(mul(0.5, sub(praw[p], qraw[q]), sin(mul(2, theta))), mul(praw[q], cos(mul(2, theta))));
//	mat[q][p]=add(mul(0.5, sub(praw[p], qraw[q]), sin(mul(2, theta))), mul(praw[q], cos(mul(2, theta))));
//	console.log(p, q, theta);
//	throw new Error('temp');
	if( isBreak(mat) ) break;

	if( count===MAX_LOOP ) throw new Error('! Matrix.jacobi iteration over '+MAX_LOOP);
    }
    const eigens=mat.map((e, i)=> mat[i][i]);

//    console.log(mat.toString());
//    console.log(A.toString());
//    console.log('===== Matrix.jacobi FINISH =====');
    return [ eigens, A ];

    function maxIndex(mat){
	let ii, jj, max=0;
	for( let i=0; i<mat.colSize; i++ ){
	    for( let j=0; j<i; j++ ){
		const val=abs(mat[i][j]);
		if( max<val ){
		    max=val;
		    ii=i;
		    jj=j;
		}
	    }
	}
	return [ii, jj];
    }

    function isBreak(mat){
	for( let i=0; i<mat.colSize; i++ ){
	    for( let j=0; j<i; j++ ){
		if( abs(mat[i][j])>thre ) return false;
	    }
	}
	return true;
    }
}

export default jacobi;
