const Scene=new THREE.Scene();

const scene={
    add: (obj)=>{ Scene.add(obj); },
    remove: (obj)=>{ Scene.remove(obj); },
    children: ()=>{ return Scene.children(); },
    
}

export default scene;
