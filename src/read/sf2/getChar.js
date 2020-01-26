const getChar=(array, index)=>{
    return new Int8Array(array.subarray(index, index).buffer)[0];
}

export default getChar;
