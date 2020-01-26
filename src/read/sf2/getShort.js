const getShort=(array, index)=>{
    return new Int16Array(array.subarray(index, index+1).buffer)[0];
}

export default getShort;
