const reset=(h)=>{
    h._bins.forEach(bin=>{ bin.content=0; });

    h.draw();
};

export default reset;
