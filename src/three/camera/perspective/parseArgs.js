import config from '../../config.js'

const parseArgs=(...args)=>{
    let aspect=1;
    if( config.html!=null ) aspect=config.html.clientWidth/config.html.clientHeight;
    
    const obj= { fov: 50, 'aspect': aspect, near: 0.1, far: 2000 };

    if( args.length===0 ) return obj;
    if( args.length===1 && typeof args[0]==='object' ) return Object.assign(obj, args[0]);

    throw new Error('! three.camera.perspective invalid argument');
}

export default parseArgs;
