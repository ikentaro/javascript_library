import Matrix from './Matrix.js'

const unitMatrix=(n)=>{
    const arr2d=[];
    for( let i=0; i<n; i++ ){
	const arr=[];
	for( let j=0; j<n; j++ ) arr.push(0);
	arr2d.push(arr);
    }
    for( let i=0; i<n; i++ ) arr2d[i][i]=1;

    return new Matrix(...arr2d);
}

export default unitMatrix;
