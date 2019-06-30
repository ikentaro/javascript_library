import config from './config.js'
import setObj3D from './setObj3D.js'

const mesh=(geom, material, param)=>{
    const mesh=new THREE.Mesh(geom, material);
    if( param!=null ) setObj3D(mesh, param);

    config.scene.add(mesh);
    return mesh;
}

export default mesh;
