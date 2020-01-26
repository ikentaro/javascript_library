const p=[ 1, Math.pow(256, 1), Math.pow(256, 2), Math.pow(256, 3) ];

const getDoubleWord=(array, index)=>{
    return p[0]*array[index]+p[1]*array[index+1]+p[2]*array[index+2]+p[3]*array[index+3];
}

export default getDoubleWord;
