import vector3 from './vector3.js'

const setObj3D=(obj, config)=>{
    if( Array.isArray(config.pos) && config.pos.length===3 && config.pos.every(a=>typeof a==='number') ){
	obj.position.x=config.pos[0]; obj.position.y=config.pos[1]; obj.position.z=config.pos[2]; 
    }
    else if( typeof config.pos==='object' ){
	if( typeof config.pos.x==='number' ) obj.position.x=config.pos.x;
	if( typeof config.pos.y==='number' ) obj.position.x=config.pos.y;
	if( typeof config.pos.z==='number' ) obj.position.x=config.pos.z;
    }

    if( Array.isArray(config.position) && config.position.length===3 && config.position.every(a=>typeof a==='number') ){
	obj.position.x=config.position[0]; obj.position.y=config.position[1]; obj.position.z=config.position[2]; 
    }
    else if( typeof config.position==='object' ){
	if( typeof config.position.x==='number' ) obj.position.x=config.position.x;
	if( typeof config.position.y==='number' ) obj.position.x=config.position.y;
	if( typeof config.position.z==='number' ) obj.position.x=config.position.z;
    }

	
    
}

export default setObj3D;
