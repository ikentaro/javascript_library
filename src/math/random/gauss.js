const gauss=(engine, mean, sigma)=>{
    const a1=engine.zeroToOne();
    const a2=engine.zeroToOne();
    
    return Math.sqrt(-2*Math.log(a1))*sigma*Math.sin(2*Math.PI*a2)+mean;
}

export default gauss;
