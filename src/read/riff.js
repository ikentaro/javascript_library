const riff= (url)=>{
    return fetch(url).then(response=> response.arrayBuffer()).then(arrayBuffer=>{
	const array=new Uint8Array(arrayBuffer);
	if( String.fromCharCode.apply("", array.subarray(0, 4))!=="RIFF" ) throw new Error(file_path+"はRIFFファイルではありません");
	if( get_size(array.subarray(4, 8))!==array.length-8 ) throw new Error(file_path+"ファイルサイズが一致しません "+size+"  "+array.length);
	console.log('Read RIFF :', url);
	console.log('     SIZE :', get_size(array.subarray(4, 8)));

	return riff_data(array);
    });
}

export default riff;

function get_size(array){ return new Uint32Array(new Uint8Array(array).buffer)[0]; };

function riff_data(array){
    const id=String.fromCharCode.apply("", array.subarray(0, 4));
    const size=get_size(array.subarray(4, 8));
    
    if( id==="RIFF" || id==="LIST" ){
        let pos=12;
        const type=String.fromCharCode.apply("", array.subarray(8, 12));
        let data=[];
        while( pos<size+8 ){
            const child=riff_data(array.subarray(pos, array.length)); // 再帰
            data.push(child);
            pos+=8+child.size;
        }
        let sum=0;
        for( let d of data ) sum+=d.size;
        sum+=8*data.length+4;
        if( sum!==size )  throw new Error(type+"チャンクのファイルサイズが一致しません "+size+"  "+sum);
	
        return { type: type, size: size, data: data };
    }
    else  return { type: id, size: size, data: array.subarray(8, 8+size) };
}
