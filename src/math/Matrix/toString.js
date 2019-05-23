const toString=(mat)=>{
    let str='';
    for( let i=0; i<mat.colSize; i++ ){
	str+='[ ';
	for( let j=0; j<mat.rawSize; j++ ){
	    str+=mat[i][j].toFixed(3)+', ';
	}
//	str=str.slice(-2);
	str+=' ]\n';
    }
    return str;
}

export default toString;
