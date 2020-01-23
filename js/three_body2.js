window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== 3-body simulation Runge-Kutta START  =====');
    let scalingF=0.001, time=performance.now(), G=3.0e3;
    const pos=[ math.vector(0, 0, 0), math.vector(0, 0, 0), math.vector(0, 0, 0) ], vel=[ math.vector(0, 0, 0), math.vector(0, 0, 0), math.vector(0, 0, 0) ], mass=[ 0, 0, 0 ];
    const posElem = doc.get.id( [[ 'pos00', 'pos01', 'pos02' ], [ 'pos10', 'pos11', 'pos12' ], [ 'pos20', 'pos21', 'pos22' ]] );
    const velElem = doc.get.id( [[ 'v00',   'v01',   'v02'   ], [ 'v10',   'v11',   'v12'   ], [ 'v20',   'v21',   'v22'   ]] );
    const massElem= doc.get.id( [ 'mass0', 'mass1', 'mass2' ] );
    const gElem   = doc.get.id('gravity-const');
    
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
	const func=()=>{
	    const now=performance.now();
	    const dt=scalingF*(time-now);
	    time=now;
	    [ pos[0], pos[1], pos[2], vel[0], vel[1], vel[2] ] = math.rungeKutta.iterate(calc, [ pos[0], pos[1], pos[2], vel[0], vel[1], vel[2] ], 1, dt);
	    setPos();
	    three.render();
	    return isContinue();
	}
	disabledAll();
	anime.request(func);
    });

    function calc(pos0, pos1, pos2, vel0, vel1, vel2){
	const result=[ vel0, vel1, vel2 ];
	for( let i=0; i<vel.length; i++ ){
	    let force=math.vector(0, 0, 0);
	    for( let j=0; j<vel.length; j++ ){
		if( i===j ) continue;
		force=math.add(force, math.mul(math.sub(pos[j], pos[i]), mass[i], mass[j], math.div(G, math.pow(math.sub(pos[j], pos[i]).abs(), 3))));
	    }
	    result.push(math.div(force, mass[i]));
	}
	return result;
    }
	
    console.log('===== 3-body simulation Runge-Kutta FINISH =====');
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
	for( let i=0; i<3; i++ ){
	    mass[i]=Number(massElem[i].value);
	    for( let j=0; j<3; j++ ){
		pos[i][j]=Number(posElem[i][j].value);
		vel[i][j]=Number(velElem[i][j].value);
	    }
	}
    }
    function printParam(){
	console.log('gravity-param', G);
	console.log('===== print position =====');
	for( let i=0; i<3; i++ ) for( let j=0; j<3; j++ ) console.log(' x['+i+']['+j+']', pos[i][j]);
	console.log('===== print velocity =====');
	for( let i=0; i<3; i++ ) for( let j=0; j<3; j++ ) console.log(' v['+i+']['+j+']', vel[i][j]);
    }

    function disabledAll(flag=true){
	posElem.forEach(a=> a.forEach(a=>{ a.disabled=flag; }));
	velElem.forEach(a=> a.forEach(a=>{ a.disabled=flag; }));
	massElem.forEach(a=> a.disabled=flag);
	gElem.disabled=true;
    }
});

function setLight(){
    const r=75;
    for( let theta=0.0; theta<2.*Math.PI; theta+=0.8 ) for( let phi=0.0; phi<Math.PI; phi+=0.8 )
        three.light.point(0xFFFFFF, 1.0, 100).position.set(r*Math.sin(theta)*Math.sin(phi), r*Math.sin(theta)*Math.cos(phi), r*Math.cos(phi));
}
