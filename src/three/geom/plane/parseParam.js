const parseParam=(...args)=>{
    const obj={ width: undefined , height: undefined , widthSegments: 1, heightSegments: 1 };
    if( args.length===1 && typeof args[0]==='object' ){
	return check(Object.assign(obj, args[0]));
    }
    if( args.length===2 && args.every(e=> typeof e==='number' ) ){
	obj.width=args[0];
	obj.height=args[1];

	return check(obj);
    }
    
    throw new Error(' three.geom.plane invalid parameters');
}

function check(obj){
    if( obj.width==null ) throw new Error('! three.geom.plane.width is null');
    if( obj.height==null ) throw new Error('! three.geom.plane.height is null');

    return obj;
}

export default parseParam;
