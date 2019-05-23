import isSame from '../isSame.js'

const isSymmetric=(mat, thre=1.0e-8)=>{
    if( mat.colSize!==mat.rawSize ) return false;
    for( let i=0; i<mat.colSize; i++ ){
	for( let j=0; j<i; j++ ){
	    if( isSame(mat[i][j], mat[j][i], thre)===false ) return false;
	}
    }
    return true;
}

export default isSymmetric;
