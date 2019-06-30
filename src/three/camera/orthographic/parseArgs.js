const parseArgs=(...args)=>{
    const obj={ left: null, right: null, top: null, bottom: null, near: 0.1, far: 2000 };
    if( args.length===1 && typeof args[0]==='object' ) obj=Object.assign(obj, args[0]);
    if( 3<args.length && args.every(a=> typeof a==='number') ){
	obj.left=args[0], obj.right=args[1], obj.top=args[2], obj.bottom=args[3];
    }
    if( 4<args.length && typeof args[4]==='number' ) obj.near=args[4];
    if( 5<args.length && typeof args[5]==='number' ) obj.far=args[5];
    
    if( obj.left==null || obj.right==null || obj.top==null || obj.bottom==null ) throw new Error('! three.camera.orthographic invalid arguments');

    return obj;
}

export default parseArgs;
