import Matrix from './Matrix.js'

const makeMatrix=(colSize, rawSize)=>{
    const col=[];
    for( let i=0; i<colSize; i++ ){
	const raw=[];
	for( let j=0; j<rawSize; j++ ) raw.push(0);
	col.push(raw);
    }
    return new Matrix(...col);
}

export default makeMatrix;
