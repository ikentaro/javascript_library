import isSame from '../isSame.js'
import conj from '../conj.js'
import isComplex from '../isComplex.js'

const isHermite=(mat, thre=1.0e-8)=>{
    if( mat.colSize!==mat.rawSize ) return false;
    for( let i=0; i<mat.colSize; i++ ){
        for( let j=0; j<i; j++ ){
            if( isSame(mat[i][j], conj(mat[j][i]), thre)===false ) return false;
        }
    }

    for( let i=0; i<mat.colSize; i++ ) if( isComplex(mat[i][i])===true ) return false;
	
    return true;
}

export default isHermite;
