window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== 3-body simulation START  =====');
    let scalingF=0.001;
    let time=performance.now(), G=3.0e3;
    
    const pos=[ [ 0, 0, 0 ], [0, 0, 0], [0, 0, 0] ], vel=[ [ 0, 0, 0 ], [0, 0, 0], [0, 0, 0] ], mass=[ 0, 0, 0 ];
    const posElem=[], velElem=[], massElem=[];
    const gElem=document.getElementById('gravity-const');
    for( let i=0; i<3; i++ ){
	massElem.push(document.getElementById('mass'+i));
	const subPos=[], subVel=[];
	for( let j=0; j<3; j++ ){ subPos.push(document.getElementById('pos'+i+j)), subVel.push(document.getElementById('v'+i+j)); }	
	posElem.push(subPos); velElem.push(subVel);
    }
    posElem.forEach(a=>{ a.forEach(a=>{ a.addEventListener('change', ()=>{ getParam(); setPos(); }) }) });
    velElem.forEach(a=>{ a.forEach(a=>{ a.addEventListener('change', getParam) }) });
    [ ...massElem, gElem ].forEach(a=> a.addEventListener('change', getParam));
    
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 50, 50, 50 ], lookAt: [ 0, 0, 0 ] });
    const balls=[], colorNames=[ 'green', 'red', 'blue' ];    
    for( let i=0; i<3; i++ ) balls.push(three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: colorNames[i] })));
    three.axis(50);
    setLight();
    getParam();
    setPos();
    
    document.getElementById('start-btn').addEventListener('click', ()=>{
	time=performance.now();
	anime.request(calc);
    });

    function calc(){
	const now=performance.now();
	const dt=scalingF*(time-now);
	time=now;
	//	console.log('===========\ndt   :', dt, 'now :', now, 'time', time);
	const forces=[];
	for( let i=0; i<3; i++ ){
	    let force=[ 0, 0, 0 ];
	    for( j=0; j<3; j++ ){
		if( i===j ) continue;
		const r=Math.sqrt(Math.pow(pos[i][0]-pos[j][0], 2)+Math.pow(pos[i][1]-pos[j][1], 2)+Math.pow(pos[i][2]-pos[j][2], 2));
		force[0]+=G*mass[i]*mass[j]*(pos[j][0]-pos[i][0])/Math.pow(r, 3);
		force[1]+=G*mass[i]*mass[j]*(pos[j][1]-pos[i][1])/Math.pow(r, 3);
		force[2]+=G*mass[i]*mass[j]*(pos[j][2]-pos[i][2])/Math.pow(r, 3);
	    }
	    vel[i][0]+=dt*force[0]/mass[i];
	    vel[i][1]+=dt*force[1]/mass[i];
	    vel[i][2]+=dt*force[2]/mass[i];
	    forces.push(force);
	}
	for( let i=0; i<3; i++ ){
	    for( let j=0; j<3; j++ ){
		pos[i][j]+=vel[i][j]*dt;
		vel[i][j]+=forces[i][j]*dt/mass[i];
	    }
	}
	setPos();

	return isContinue(); 
    }
    console.log('===== 3-body simulation FINISH =====');
    function isContinue(){
	if( Math.sqrt(pos[0][0]*pos[0][0]+pos[0][1]*pos[0][1]+pos[0][2]*pos[0][2])>100 &&
	    Math.sqrt(pos[1][0]*pos[1][0]+pos[1][1]*pos[1][1]+pos[1][2]*pos[1][2])>100 &&
	    Math.sqrt(pos[2][0]*pos[2][0]+pos[2][1]*pos[2][1]+pos[2][2]*pos[2][2])>100 ) return false;
	return true;
    }
    function setPos(){
	for( let i=0; i<3; i++ ) balls[i].position.set(pos[i][0], pos[i][1], pos[i][2]);
	three.render();
    }

    function getParam(){
	G=1.0e3*Number(gElem.value)
	console.log('gravity-param', G);
	for( let i=0; i<3; i++ ){
	    mass[i]=Number(massElem[i].value);
	    for( let j=0; j<3; j++ ){
		pos[i][j]=Number(posElem[i][j].value);
		vel[i][j]=Number(velElem[i][j].value);
		console.log('x['+i+']['+j+']', pos[i][j]);
		console.log('v['+i+']['+j+']', vel[i][j]);
	    }
	    console.log('m['+i+']', mass[i]);
	}

    }
});

function setLight(){
    const r=75;
    for( let theta=0.0; theta<2.*Math.PI; theta+=0.8 ) for( let phi=0.0; phi<Math.PI; phi+=0.8 )
        three.light.point(0xFFFFFF, 1.0, 100).position.set(r*Math.sin(theta)*Math.sin(phi), r*Math.sin(theta)*Math.cos(phi), r*Math.cos(phi));
}
