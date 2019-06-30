const vector3=(val)=>{
    if( Array.isArray(val) && val.length===3 && val.every(a=>typeof a==='number') ) return new THREE.Vector3(val[0], val[1], val[2]);
    if( typeof val.x ==='number' && typeof val.y==='number' && typeof val.z==='number' ) return new THREE.Vector3(val.x, val.y, val.z);

    throw new Error('! three.vector3 invalid parameter');
}

export default vector3;
