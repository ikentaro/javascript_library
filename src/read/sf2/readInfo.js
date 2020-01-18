const readInfo=(chunk)=>{
    const info={}
    for( const a of chunk.data ){
	console.log(a);
    }
    return info;
}

export default readInfo;
