const trajectories=[];
let color=0;
let innerTime=performance.now();

window.addEventListener('load', async ()=>{
    console.log('===== Three.js Wrapper earth START  =====');
//    console.log('id canvas');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 50, 50, 50 ], lookAt: [ 0, 0, 0 ] });

    three.axis(50);
    const r=10;
    const posEarth=[ 0.0, 0.0, -50.0 ];
    const moonPos =[ 0.0, 0.0, 0.0 ];
    three.light.point(0xFFFFFF, 1.0);

    calc(0);
    const earthTexture= await three.texture('earth.png');
    console.log("textrure", earthTexture);
    const earth=three.mesh(three.geom.sphere(3, 10, 10), three.material.standard({ map: earthTexture }), { pos: posEarth });
    const moon=three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: 'yellow',  }), { pos: moonPos });
    const sun=three.mesh(three.geom.sphere(10, 10, 10), three.material.standard({ color: 'red', opacity: 0.5, transparent: true, side: THREE.DoubleSide }), { pos: [0, 0, 0] });
    three.render();



    
    function calc(){
	innerTime=performance.now();
	console.log('===== calc start =====');
	console.log('inner time :', innerTime);
	calcMoonPos(0);
    }
    
    function calcMoonPos(theta){
	
	moonPos[0]=posEarth[0]+r*Math.sin(theta);
	moonPos[1]=posEarth[1]+r*Math.cos(theta);
	moonPos[2]=posEarth[2];
    }
    console.log('===== Three.js Wrapper earth FINISH =====');
});
