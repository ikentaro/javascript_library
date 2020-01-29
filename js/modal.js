function setModal(zIndex=10, bgOpacity=0.5, bgColor='gray', widthSize=70, heightSize=70){
    const modalBG   = document.createElement('div');
    const modalMain = document.createElement('div');
    const bgStyle={
	'zIndex': zIndex,
	position: 'absolute',
	top: 0, left: 0, width:  '100vw', height: '100vh',
	opacity: bgOpacity,
	background: bgColor,

	display: 'flex', justifyContent: 'center', alignItems: 'center',
    };    
    const mainStyle={
	'zIndex':  zIndex+1,
	position: 'absolute',
	top:  (100-widthSize)/2+'%', 
	left: (100-heightSize)/2+'%',
	width:  widthSize+'%',
	height: heightSize+'%',
	background: 'white',

	'opacity': 1.0, 
    };
    modalBG.id='modal-bagkground-'+zIndex;
    modalMain.id='modal-main-'+zIndex;
    for( const [ key, val ] of Object.entries(bgStyle)   ) modalBG.style[key]=val;
    for( const [ key, val ] of Object.entries(mainStyle) ) modalMain.style[key]=val;
    
//    modalBG.append(modalMain);
    document.body.append(modalBG);
    document.body.append(modalMain);

    const closeFunc=()=>{ modalBG.style.display='none';  modalMain.style.display='none';  }
    const openFunc =()=>{ modalBG.style.display='block'; modalMain.style.display='block'; }
    modalBG.addEventListener('click', closeFunc);
    
    return { open: openFunc, close: closeFunc, background: modalBG, main: modalMain };
}
