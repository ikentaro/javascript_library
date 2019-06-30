const setParam=(cam, obj)=>{
    if( obj.pos!=null || obj.position!=null ){
	const pos=obj.position || obj.pos;
	if( Array.isArray(pos) && pos.length===3 && pos.every(a=> typeof a==='number') ){
	    cam.position.x=pos[0], cam.position.y=pos[1], cam.position.z=pos[2];
	}
	if( typeof pos==='object' ){
	    if( typeof pos.x==='number' ) cam.positon.x=pos.x;
	    if( typeof pos.y==='number' ) cam.positon.y=pos.y;
	    if( typeof pos.z==='number' ) cam.positon.z=pos.z;
	}
    }
    if( obj.lookAt!=null && Array.isArray(obj.lookAt) && obj.lookAt.length===3 && obj.lookAt.every(a=> typeof a==='number') ){
	cam.lookAt(...obj.lookAt);
    }
}

export default setParam;
