const swapRaw=(arr2d, i, j)=>{
    const tmp=arr2d[i];
    arr2d[i]=arr2d[j];
    arr2d[j]=tmp;
}

export default swapRaw;
