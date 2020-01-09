const trajectories=[];
let color=0;
let scaleFactor=0.1;
const times=[];

window.addEventListener('load', async ()=>{
    console.log('===== Three.js Wrapper earth START  =====');

    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 60, 50, 60 ], lookAt: [ 0, 0, 0 ] });

    three.axis(50);
    const simTimeElem=document.getElementById('sim-time'), fpsElem=document.getElementById('fps'), rangeElem=document.getElementById('range-scale'), scaleElem=document.getElementById('scale');
    const R=50, r=10;

    setLight();
    const earthTexture= await three.texture('earth.png');
    const earth=three.mesh(three.geom.sphere(3, 10, 10), three.material.standard({ map: earthTexture }));
    const moon=three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: 'yellow',  }));
    const sun=three.mesh(three.geom.sphere(10, 10, 10), three.material.standard({ color: 'red', opacity: 0.5, transparent: true, side: THREE.DoubleSide }), { pos: [0, 0, 0] });
    anime.request(calc);

    changeScale();
    rangeElem.addEventListener('change', changeScale);
    
    function changeScale(){
	scaleFactor=0.1*Number(scaleElem.value);
	scaleElem.value=rangeElem.value;
    }
    
    function setCam(thetaEarth){
	const selected=[ ...document.getElementsByName('camera') ].find(a=> a.checked);
	if( selected.value==1 ){
	    three.config.camera.position.set(60, 50, 60);
	    three.config.camera.lookAt(0, 0, 0);
	}
	else if( selected.value==2 ){
	    three.config.camera.position.set(1.5*R*Math.cos(thetaEarth), 20, 1.5*R*Math.sin(thetaEarth));
	    three.config.camera.lookAt(0, 0, 0);
	}
	else if( selected.value==3 ){
	    three.config.camera.position.set(-0.5*R*Math.cos(thetaEarth), 20, -0.5*R*Math.sin(thetaEarth));
	    three.config.camera.lookAt(0, 0, 0);
	}
	else if( selected.value==4 ){
	    three.config.camera.position.set(R*Math.cos(thetaEarth)+R*Math.sin(thetaEarth), 10 ,R*Math.sin(thetaEarth)+R*Math.cos(thetaEarth));
	    three.config.camera.lookAt(R*Math.cos(thetaEarth), 0. ,R*Math.sin(thetaEarth));
	}
//	else alert('カメラエラー');
//	console.log(selected.value);	
    }
    function calc(){
	const now=performance.now();
	times.push(now);
	while( times[0]<now-1000 ) times.shift();
	
	let innerTime=scaleFactor*performance.now();
	const time=innerTime%24, thetaEarth=2.0*Math.PI*innerTime/(365.0*24.0), localTheta=2.0*Math.PI*innerTime/24, thetaMoon =2.0*Math.PI*innerTime/(365*24/12);
	innerTime=Math.ceil(innerTime/24);
	let day=innerTime%365, month;
	const numOfDays=[ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	for( let i=0; numOfDays.length; i++ ){
	    if( numOfDays[i]>day ){ month=i+1; break; }
	    else day-=numOfDays[i];
	}
	earth.position.set(R*Math.cos(thetaEarth), 0.0, R*Math.sin(thetaEarth));
	moon.position.set(R*Math.cos(thetaEarth)+r*Math.cos(thetaMoon), 0, R*Math.sin(thetaEarth)+r*Math.sin(thetaMoon));
	
	const year=2019+Math.ceil(innerTime/365);
	simTimeElem.value=`${year}/${month}/${day} ${Math.ceil(time)}`;
	fpsElem.value=times.length;
	earth.rotateY(localTheta);
	three.render();

	setCam(thetaEarth);
    }

    function setLight(){
	const r=11;
	for( let theta=0.0; theta<2.*Math.PI; theta+=0.8 ) for( let phi=0.0; phi<Math.PI; phi+=0.8 )
	    three.light.point(0xFFFFFF, 1.0, 65).position.set(r*Math.sin(theta)*Math.sin(phi), r*Math.sin(theta)*Math.cos(phi), r*Math.cos(phi));
    }
    console.log('===== Three.js Wrapper earth FINISH =====');
});
