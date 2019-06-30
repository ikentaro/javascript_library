window.addEventListener('load', ()=>{
    console.log('===== Three.js Wrapper Module START  =====');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 500, 500, 500 ], lookAt: [ 0, 0, 0 ] });

    three.mesh(three.geom.plane(100, 100), three.material.standard({ color: 'green' }));
    three.mesh(three.geom.box(50, 50, 50), three.material.standard({ color: 'blue' }), { pos: [ 100, 0, 0 ] });
    three.mesh(three.geom.circle(50), three.material.standard({ color: 'red' }), { pos: [ -100, 0, 0 ] });
    three.mesh(three.geom.sphere(50), three.material.standard({ color: 'silver' }), { pos: [ 200, 0, 0 ] });
    three.light.ambient();
    three.light.directional();
    
    three.dump.renderer();
    three.dump.camera();

    three.render();
    console.log('===== Three.js Wrapper Module FINISH =====');
});
