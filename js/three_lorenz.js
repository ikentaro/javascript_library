const trajectories=[];
let color=0;

window.addEventListener('load', ()=>{
    console.log('===== Three.js Wrapper lorenz START  =====');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 50, 50, 50 ], lookAt: [ 0, 0, 0 ] });

    three.axis(50);
    const ball=three.mesh(three.geom.sphere(1, 10, 10), three.material.standard({ color: 'silver' }), { pos: [ 3.0, 0.0, 1.0 ] });
    
    three.light.ambient();
    three.light.directional();

    document.getElementById('number-x').addEventListener('change', setPos);
    document.getElementById('number-y').addEventListener('change', setPos);
    document.getElementById('number-z').addEventListener('change', setPos);
    document.getElementById('btn-start').addEventListener('click', ()=>{
//	console.log('===== start click =====');
	three.orbitControl();
	
	const [ p, r, b ]=getParam();
	const lorenzFunc=(x, y, z)=>{ return [ -p*x+p*y,  -x*z+r*x-y,  x*y-b*z  ]; }

	const render=()=>{
	    const next=math.rungeKutta.iterate(lorenzFunc, [ ball.position.x, ball.position.y, ball.position.z ], 100, 1.0e-4);
	    const geom=three.geometory();
	    geom.vertices.push(three.vector3(ball.position.x, ball.position.y, ball.position.z));
	    geom.vertices.push(three.vector3(next[0], next[1], next[2]));
	    
	    const line=three.line(geom, three.material.basic({ color: 'hsl('+color+',100%,50%)' }));
	    ball.position.set(next[0], next[1], next[2]);
	    three.render();

	    three.config.scene.add(line);
	    trajectories.push(line);
	    
	    if( Math.sqrt(next[0]*next[0]+next[1]*next[1]+next[2]*next[2])<100 ) window.requestAnimationFrame(render);
	    else console.log('> Calculation STOP');

	    color++;
	    if( color>360 ) color=0;
	}
	window.requestAnimationFrame(render);
    });
    
    three.render();    

    function setPos(){
	const pos=[ Number(document.getElementById('number-x').value), Number(document.getElementById('number-y').value), Number(document.getElementById('number-z').value) ];
	ball.position.set(pos[0], pos[1], pos[2]);
	three.render();
    }

    function getParam(){ return [ Number(document.getElementById('number-p').value), Number(document.getElementById('number-r').value), Number(document.getElementById('number-b').value) ]; }

    console.log('===== Three.js Wrapper lorenz FINISH =====');
});
