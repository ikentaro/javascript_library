const dump=(config)=>{
    console.log('===== three.config.dump START  =====');
    if(      config.camera.isPerspectiveCamera===true ) console.log('> Camera : Prespective');
    else if( config.camera.isOrthograhicCamera===true ) console.log('> Camera : Orthograhic');
    else if( config.camera==null ) console.log('> Camera : no camera !');
    else console.log('> Camera : unknown !!!');

    console.log('> aspect :', config.camera.aspect);
//    console.log(config.camera.isPrespectiveCamera
    
    console.log('===== three.config.dump FINISH =====');
}

export default dump;
