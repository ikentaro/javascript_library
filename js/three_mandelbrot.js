window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== three_mandlebrot START  =====');
    //*** set Three.js setting element camera light ***//
    three.config.set({ html: document.getElementById('canvas')});
    three.axis(50);
    three.camera.perspective({ pos: [ -2, 2, 0 ], lookAt: [ 0, 0, 0 ] });
    setSpotLight();
    three.render();
    calcMap();

    anime.request(three.render);
    function calcMap(){
	const [ nSplit, maxLoop ]=getParam();
	const timeTagName=`madelbrot[${nSplit}][${maxLoop}]`;
	console.time(timeTagName);
	const delta=2.0/nSplit;
	const map=[], indexMap=[];
	const geom=new THREE.Geometry();
	for( let i=0; i<nSplit; i++ ){
	    const arr=[], x=-2.0+delta*(2*i+1);
	    for( let j=0; j<nSplit; j++ ){
		const y=-2.0+delta*(2*j+1);
		const loop=calcLoopNum(math.complex(x, y), maxLoop);
		arr.push({ 'x':x, 'y': loop/maxLoop, 'z': y, 'loop': loop, vertexIndex: geom.vertices.length });
		geom.vertices.push(new THREE.Vector3(x, loop/maxLoop, y));
		indexMap.push([i, j]);
	    }
	    map.push(arr);
	}
	console.timeEnd(timeTagName);

	const timeTagName2=`render[${nSplit}][${maxLoop}]`;
	console.time(timeTagName2);
	for( let i=0; i<map.length-1; i++ ){
	    for( let j=0; j<map[i].length-1; j++ ){
		geom.faces.push( new THREE.Face3(map[i+1][j].vertexIndex, map[i][j].vertexIndex, map[i][j+1].vertexIndex));
		geom.faces.push( new THREE.Face3(map[i+1][j].vertexIndex, map[i][j+1].vertexIndex, map[i+1][j+1].vertexIndex));
	    }
	}
	geom.computeFaceNormals();
	three.mesh(geom, three.material.standard({color: 'blue'}));
	three.orbitControl();
	three.render();
	console.timeEnd(timeTagName2);
    }
    
    function calcLoopNum(c, max){
       let z=math.complex(0, 0);
        let abs=z.abs;	
        for( let i=0; i<max; i++ ){
            z=math.add(math.mul(z, z), c);
            if( z.abs>2 ) return i;
        }
        return max;
    }

    function getParam(){ return [ Number(document.getElementById('n-split').value), Number(document.getElementById('max-loop').value) ]; }
    console.log('===== three_mandlebrot FINISH =====');
    
    function setSpotLight(){
	three.light.spot(0xFFFFFF, 0.3, 15., Math.PI/6, 0.5, 0.7).position.set(0, 3, 0);
	three.light.spot(0x00FFFF, 0.7, 20., Math.PI/6, 0.5, 0.5).position.set(-3, 3, 3);
	three.light.spot(0xFF00FF, 0.7, 20., Math.PI/6, 0.5, 0.5).position.set( 3, 3, 3);
	three.light.spot(0xFFFF00, 0.7, 20., Math.PI/6, 0.5, 0.5).position.set( 3, 3, -3);
    }
});
