window.addEventListener('load', ()=>{
    console.log('===== Three.js Wrapper lorenz START  =====');
    three.config.set({ html: document.getElementById('canvas')});
    three.camera.perspective({ pos: [ 10, 10, 10 ], lookAt: [ 0, 0, 0 ] });

    three.axis(10);
    three.mesh(three.geom.sphere(0.1, 10, 10), three.material.standard({ color: 'silver' }), { pos: [ 0, 0, 0 ] });
    
    three.light.ambient();
    three.light.directional();

    document.getElementById('btn-start', ()=>{
	const [ p, r, b ]=getParam();
	function lorenzFunc(x, y, z){ return [  -p*x+p*y,  -x*z+r*x-y,  x*y+b*z  ]; }	
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
