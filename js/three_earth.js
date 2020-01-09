const trajectories=[];
let color=0;
let scaleFactor=0.1;
const times=[];

window.addEventListener('load', async ()=>{
    console.log('===== Three.js Wrapper earth START  =====');

    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 60, 50, 60 ], lookAt: [ 0, 0, 0 ] });

    three.axis(50);
    const simTimeElem=document.getElementById('sim-time');
    const fpsElem=document.getElementById('fps');
    
    const R=50, r=10;
    three.light.point(0xFFFFFF, 1.0);
        
    const earthTexture= await three.texture('earth.png');
    const earth=three.mesh(three.geom.sphere(3, 10, 10), three.material.standard({ map: earthTexture }));
    const moon=three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: 'yellow',  }));
    const sun=three.mesh(three.geom.sphere(10, 10, 10), three.material.standard({ color: 'red', opacity: 0.5, transparent: true, side: THREE.DoubleSide }), { pos: [0, 0, 0] });

    anime.request(calc);
    function calc(){
	const now=performance.now();
	times.push(now);
	console.log(now, times.length);
	while( times[0]<now-1000 ) times.shift();
	
	let innerTime=scaleFactor*performance.now();
	const time=innerTime%24;
	const thetaEarth=2.0*Math.PI*innerTime/(365.0*24.0);
	const localTheta=2.0*Math.PI*time/24;
	const thetaMoon =2.0*Math.PI*innerTime/(365*24/12);
	innerTime=Math.ceil(innerTime/24);
	let day=innerTime%365, month;

	const numOfDays=[ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	for( let i=0; numOfDays.length; i++ ){
	    if( numOfDays[i]>day ){ month=i+1; break; }
	    else day-=numOfDays[i];
	}
	
	const moonX=R*Math.cos(thetaEarth)+r*Math.cos(thetaMoon);
	const moonZ=R*Math.sin(thetaEarth)+r*Math.sin(thetaMoon);
	
	earth.position.set(R*Math.cos(thetaEarth), 0.0, R*Math.sin(thetaEarth));

	moon.position.set(moonX, 0.0, moonZ);
	const year=2019+Math.ceil(innerTime/365);
	simTimeElem.value=`${year}/${month}/${day} ${time}`;
	fpsElem.value=times.length;
	earth.rotateY(localTheta);
	three.render();
    }
    console.log('===== Three.js Wrapper earth FINISH =====');
});
