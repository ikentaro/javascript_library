import abs from '../abs.js'
import add from '../add.js'
import sub from '../sub.js'
import div from '../div.js'
import mul from '../mul.js'

import swapRaw from './swapRaw.js'
import swapCol from './swapCol.js'

import Matrix from '../Matrix.js'

const THRE=1.0e-8;

const sweepOut=(origin)=>{
//    console.log('===== Matrix.sweepOut START =====');
    const arr=[];
    for( let i=0; i<origin.colSize; i++ ){
	const raw=[];
	for( let j=0; j<2*origin.rawSize; j++ ) raw.push(0);
	for( let j=0; j<origin.rawSize; j++ ) raw[j]=origin[i][j];
    	raw[origin.rawSize+i]=1;
	arr.push(raw);
    }
    
//    console.log('forward elimination START');
    for( let i=0; i<origin.colSize; i++ ){
	let max=abs(arr[i][i]), pivot=i;
	for( let j=i+1; j<origin.colSize; j++ ){
	    const tmp=abs(arr[j][i]);
	    if( tmp>max ){
		max=tmp;
		pivot=j;
	    }
	}
	if( max<THRE ) throw new Error('! Matrix.solve(method="sweepOut") can not solve');
	if( pivot!=i ) swapRaw(arr, i, pivot);
	
    	divRaw(arr, i, arr[i][i]);
    	for( let j=i+1; j<origin.colSize; j++ ) scaleSubRaw(arr, j, i, arr[j][i]);
    }
//    console.log('forward elimination FINISH');
//    console.log('backward elimination START');
    for( let i=origin.colSize-1; i>0; i-- ) for( let j=i-1; j>=0; j-- ) scaleSubRaw(arr, j, i, arr[j][i]);
    
//    console.log('backward elimination FINISH');
//    console.log('===== Matrix.sweepOut FINISH =====');
    return new Matrix(...arr.map(e=> e.slice(origin.rawSize)));
}

export default sweepOut;

function divRaw(arr2d, i, scale){ for( let k=0; k<arr2d[0].length; k++ ){ arr2d[i][k]=div(arr2d[i][k], scale); } }
function scaleSubRaw(arr2d, j, i, scale){ for( let k=0; k<arr2d[0].length; k++ ){ arr2d[j][k]=sub(arr2d[j][k], mul(scale, arr2d[i][k])); } }

