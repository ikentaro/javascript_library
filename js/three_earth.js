const trajectories=[];
let color=0;

window.addEventListener('load', ()=>{
    console.log('===== Three.js Wrapper earth START  =====');
    console.log('id canvas');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 50, 50, 50 ], lookAt: [ 0, 0, 0 ] });

    three.axis(50);
    const r=10;
    const posEarth=[ 0.0, 0.0, -50.0 ];
    const moonPos =[ 0.0, 0.0, 0.0 ];
    calcMoonPos(0);    

    const earth=three.mesh(three.geom.sphere(3, 10, 10), three.material.standard({ color: 'green' }), { pos: posEarth });
    const moon=three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: 'yellow' }), { pos: moonPos });
    console.log('pos', earth.position);
    three.light.point(0xFFFFFF, 1.0);
    three.render();
    
    
    function calcMoonPos(theta){
	moonPos[0]=posEarth[0]+r*Math.sin(theta);
	moonPos[1]=posEarth[1]+r*Math.cos(theta);
	moonPos[2]=posEarth[2];
    }
    console.log('===== Three.js Wrapper earth FINISH =====');
});
