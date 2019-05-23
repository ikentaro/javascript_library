import mul from '../mul.js'
import sub from '../sub.js'
import div from '../div.js'
import minus from '../minus.js'

import unitMatrix from '../unitMatrix.js'

const leverrierFaddev=(mat)=>{
    console.log('===== Leverrir Faddev Method START  =====');
    const E=unitMatrix(mat.colSize);
    let B=mat.copy();
    const params=[ -1.0, B.tr() ];

    for( let i=0; i<mat.colSize-1; i++ ){
	B=mul(mat, sub(B, mul(params[params.length-1], E)));
	params.push(div(B.tr(), i+2));
    }

    console.log('===== Leverrir Faddev Method FINISH =====');
    return params.map(a=> minus(a)); // x^n + p[0]*x^(n-1)+....p[n-1];
}

export default leverrierFaddev;
