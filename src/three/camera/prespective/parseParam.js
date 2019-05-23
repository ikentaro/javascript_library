const parseParam=(...args)=>{
    let obj={ fov: 45, aspect: 1, near: 0.1, far: 2000 }
    if( args.length===1 && typeof args[0]==='object' ) return Object.assign(obj, args[0]);
    if( args[0]==='number' ){
	obj.fov=args[0];
	if( obj[1]!=null ) obj.aspcet=args[1];
	if( obj[2]!=null ) obj.near=args[2];
	if( obj[3]!=null ) obj.far=args[1];
	return obj;
    }

    throw new Error('! three.camera.prespective invalid parameters');
}

export default parseParam;
