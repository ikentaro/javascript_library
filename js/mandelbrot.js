const MAX_ITERATION=100;

let resultMap;

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Mandelbrot START  =====');
    const can=document.getElementById('canvas');
    const ctx=can.getContext('2d');
    ctx.fillStyle='blue';
    
    const width=can.width, height=can.height;
    const scaleF=width<height ? width/4 : height/4;
//    console.log(width, height, scaleF);
//    svg.config.setPaper(can);
  
    document.getElementById('btn-calc').addEventListener('click', ()=>{	
	const inN=document.getElementById('input-n');
	inN.min=inN.value;
	const startTime=performance.now();
	console.log('>>> N', inN.value);
	console.log('>>> scale : ', scaleF);
	const n=Number(inN.value);
	const dt=4.0/n;
	
	if( resultMap===void 0 ){
	    const tmpMap=[];
	    for( let x=-2+0.5*dt, xi=0; x<2; x+=dt, xi++ ){
		const tmpArr=[];
		for( let y=-2+0.5*dt, yi=0; y<2; y+=dt, yi++ ){
		    const result=isMandelbrot(math.complex(x,y));
		    tmpArr.push(result);
		    if( result===true ){
			const x0=0.5*width+x*scaleF;
			const y0=0.5*height+y*scaleF;
			ctx.fillRect(x0, y0, dt*scaleF, dt*scaleF);
//			svg.config.paper.rect(x0, y0, dt*scaleF, dt*scaleF).attr({ fill: 'blue' });
		    }
		}
		tmpMap.push(tmpArr);
	    }
	    resultMap=tmpMap;
	}
	console.log('>>> take time : ', performance.now()-startTime)
//	console.log(resultMap);
    });
    
    function isMandelbrot(c){
	let z=math.complex(0, 0);
	let abs=z.abs;
	for( let i=0; i<MAX_ITERATION; i++ ){
	    z=math.add(math.mul(z, z), c);
	    if( z.abs>2 ) return i;
	}
	return true;
    }

    console.log('===== Mandelbrot FINISH =====');
});
