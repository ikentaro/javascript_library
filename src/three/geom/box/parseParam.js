const parseParam=(...args)=>{
    let obj={ width: undefined, height: undefined, depth: undefined, widthSegments: 1, heightSegments: 1, depthSegments: 1 };

    if( args.length===1 && typeof args[0]==='object' ){ obj=Object.assgin(obj, args[0]); }
    else throw new Error('! three.geom.box invalid arguments');
    
}

export default parseParam;
