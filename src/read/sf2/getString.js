const getString=(array, first, last)=>{
    return String.fromCharCode.apply('', array.subarray(first, last).filter(a=>{ return a!==0; }));
};

export default getString;
