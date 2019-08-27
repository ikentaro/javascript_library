window.addEventListener('load', ()=>{
    console.log('===== Three.js Wrapper lorenz START  =====');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 10, 10, 10 ], lookAt: [ 0, 0, 0 ] });

    three.axis(10);
    const ball=three.mesh(three.geom.sphere(0.1, 10, 10), three.material.standard({ color: 'silver' }), { pos: [ 1.0, 0, 0 ] });
    
    three.light.ambient();
    three.light.directional();

    document.getElementById('btn-start').addEventListener('click', ()=>{
	console.log('===== start click =====');
	const [ p, r, b ]=getParam();
	const lorenzFunc=(x, y, z)=>{ return [  -p*x+p*y,  -x*z+r*x-y,  x*y-b*z  ]; }

	const render=()=>{
	    const next=math.rungeKutta.iterate(lorenzFunc, [ ball.position.x, ball.position.y, ball.position.z ], 100, 1.0e-4);
	    ball.position.set(next[0], next[1], next[2]);
	    three.render();
	    
//	    console.log(Math.sqrt(next[0]*next[0]+next[1]*next[1]+next[2]*next[2]));
	    if( Math.sqrt(next[0]*next[0]+next[1]*next[1]+next[2]*next[2])<25 ) window.requestAnimationFrame(render);
	    else console.log('> Calculation STOP');
	}
	window.requestAnimationFrame(render);
    });

    getParam();
    function getParam(){
	const p=Number(document.getElementById('number-p').value);
	const r=Number(document.getElementById('number-r').value);
	const b=Number(document.getElementById('number-b').value);
	console.log('p : ',p, ' r : ', r, ' b : ',b);
	return [ p, r, b ];
    }

    three.render();    
    const light=three.mesh(three.geom.sphere(0.25, 10, 10), three.material.standard({ color: 'silver' }), { pos: [ 200, 0, 0 ] });
    three.config.dump();
    console.log('===== Three.js Wrapper lorenz FINISH =====');
});
