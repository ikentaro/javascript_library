window.addEventListener('DOMContentLoaded',()=>{
    console.log('===== thee_sun START  =====');
    let time=performance.now(), scalingF=1.0e-7;
    const G=1.003;
    
    //*** for Parameters (to Satrun) ***//
    const sunMass=1.9884e30, mercursMass=3.301e23,  venusMass=4.869e24,  earthMass=5.9724e24, marsMass=6.4191e23, jupiterMass=1.898e27,  satrunMass=5.688e26;
    const sunLen =0,         mercursLen =5.7910e10, venusLen =1.0821e11, earthLen =1.4960e11, marsLen =2.2794e11, jupiterLen =7.7841e11, satrunLen =1.4267e12;

    const masses  =[ sunMass/earthMass, mercursMass/earthMass, venusMass/earthMass, earthMass/earthMass, marsMass/earthMass, jupiterMass/earthMass, satrunMass/earthMass ];
    const lengths =[ sunLen/earthLen,   mercursLen/earthLen,   venusLen/earthLen,   earthLen/earthLen,   marsLen/earthLen,   jupiterLen/earthLen,   satrunLen/earthLen ];
    const radiuses=[ 0.15,              0.04,                  0.04,                0.07,                0.04,               0.1,                   0.07 ];
    const colors  =[ 'red',             'skyblue',             'gold',              'blue',              'red',              'gray',                'yellow' ];
    const velocities=lengths.map((l, i)=> l!=0 ? Math.sqrt(masses[0]/l) : 0);

    const pos=   lengths.map((l, i)=> math.vector( l, 0, 0 ));
    const vel=velocities.map((v, i)=> math.vector( 0, 0, v ));
//    console.log(pos, vel);    

    //*** set Three.js setting element camera light ***//
    three.config.set({ html: document.getElementById('canvas')});
    three.axis(50);
    three.camera.perspective({ pos: [ -3, 1.5, 3 ], lookAt: [ 0, 0, 0 ] });
    setPointLight(0.17, 8, 7);
    lengths.forEach((a, i)=>{ drawTrajectory(a, colors[i]) })

    const stars=radiuses.map((r, i)=>{
	const star=three.mesh(three.geom.sphere(r, 10, 10), three.material.standard({ color: colors[i] }));
	star.position.set(lengths[i], 0, 0);
	return star;
    });
    
    three.render();
    if( confirm('シミュレーションしますか') ){
	time=performance.now();
	function next(){
	    const now=performance.now();
	    const dt=scalingF*(now-time);
	    time=now;
	    const result=math.rungeKutta.iterate(calc, [ ...pos, ...vel ], 1, dt);

	    for( let i=0; i<pos.length; i++ ){
		pos[i]=result[i];
		vel[i]=result[pos.length+i];
	    }
	    setPos();
	}
	anime.request(next);
    }

    function calc(...args){
	const result=[];
	const halfLength=args.length/2;
	for( let i=halfLength; i<args.length; i++ ) result.push(args[i]);
	for( let i=0; i<halfLength; i++ ){
	    let force=math.vector(0, 0, 0);
	    for( let j=0; j<halfLength; j++ ){
		if( i===j ) continue;
		force=math.add(force, math.mul(math.sub(pos[j], pos[i]), masses[j], math.div( G, math.pow( math.sub(pos[j], pos[i]).abs(), 3 ))));  
	    }
	    result.push(force);
	}
	return result;
    }
    console.log('===== thee_sun FINISH =====');
    function setPos(){
	for( let i=0; i<pos.length; i++ ){
	    stars[i].position.set(pos[i][0], pos[i][1], pos[i][2]);
	}
	three.render();
    }
    
    function setPointLight(r=0.001, nPhi=5, nTheta=5){
	const dPhi=2*Math.PI/nPhi, dTheta=2*Math.PI/nTheta;
	for( let phi=0; phi<2*Math.PI; phi+=dPhi ){
	    for( let theta=0; theta<2*Math.PI; theta+=dTheta ){
		three.light.point(0xFFFFFF, 1.0, 15).position.set(r*Math.sin(theta)*Math.sin(phi), r*Math.sin(theta)*Math.cos(phi), r*Math.cos(phi));
	    }
	}
    }

    function drawTrajectory(r, color){
	const geom=three.geometry();
	for( let theta=0; theta<2*Math.PI; theta+=0.01 ) geom.vertices.push(three.vector3(r*Math.cos(theta), 0, r*Math.sin(theta)));
	geom.vertices.push(three.vector3(r, 0, 0));
	
	const line=three.line(geom, three.material.basic({ 'color': color }));
	three.config.scene.add(line);
	return line
    }
});
