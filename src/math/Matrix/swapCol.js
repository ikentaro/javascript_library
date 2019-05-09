const swapCol=(arr2d, i, j)=>{
    for( let k=0; k<arr2d.length; k++ ){
	const tmp=arr2d[k][i];
	arr2d[k][i]=arr2d[k][j];
	arr2d[k][j]=tmp;
    }
}

export default swapCol;
