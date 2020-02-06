const MAX_ITERATION=100, EPSILON=1.0e-12;

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Mandelbrot START  =====');
    svg.config.setPaper(document.getElementById('canvas'));

    function draw(points){
	const can=document.getElementById('canvas');
	const width=can.clientWidth, height=can.clientHeight;
	const scaleF=width<height ? width/4 : height/4;
	const convert=(x, y)=>{ return [ 0.5*width+scaleF*x, 0.5*height+scaleF*y ] };
	const args=[];
	points.forEach(a=> args.push(...convert(...a)));
	console.log(args);
	const pline=svg.config.paper.polyline(args).attr({ stroke: 'blue', fill: 'blue' });
    }

    const points=[];
    let x=0, y=0;
    while( calcLoopNum(math.complex(x, y))===MAX_ITERATION ) x+=0.1;
    console.log('rough point', x);
    let x0=x-0.1, x1=x;
    while( Math.abs(x0-x1)>EPSILON ){
	x=0.5*(x0+x1);
	if( calcLoopNum(math.complex(x, y))===MAX_ITERATION ) x0=x;
	else x1=x;
    }
    x=x0;
    console.log(calcLoopNum(math.complex(x, y)));
    console.log('fine point', x);
    points.push([ x, y ]);

    for( let i=0; i<1000; i++ ){
	[ x, y ]=searchNext(x, y, 0.05);
	if( x<-2 || 2<x || y<-2 || 2<y ) console.log(x, y);
	points.push([ x, y ]);
//	console.log(x, y);
    }
    draw(points);
    
    
    function searchNext(initx, inity, r=0.001, theta=0.0, deltaTheta=0.1, thre=EPSILON){
//	console.log('x0 =', initx, 'y0 =', inity, 'r =', r ,'dtheta =', deltaTheta, 'thre =', thre);
//	console.log('search next loop num :', calcLoopNum(math.complex(initx, inity)));
	const calcFromTheta=(theta)=> { return [ initx+r*Math.cos(theta), inity+r*Math.sin(theta) ] };
	let [ x0, y0 ] = calcFromTheta(theta);
	let x1, y1;
	if( calcLoopNum(math.complex(y0, y0))!==MAX_ITERATION ){
//	    console.log('aaa');
	    x1=x0, y1=y0;
	    theta-=deltaTheta;
	    [ x0, y0 ]=calcFromTheta(theta);

	    while( true ){
		x1=x0, y1=y0;
		theta-=deltaTheta;
		[ x0, y0 ]=calcFromTheta(theta);
		if( calcLoopNum(math.complex(x0, y0))===MAX_ITERATION ) break;
	    }
	}
	else{
//	    console.log('bbb');
	    theta+=deltaTheta;
	    [ x1, y1 ]=calcFromTheta(theta);
	    while( calcLoopNum(math.complex(x1, y1))!==MAX_ITERATION ){
		x0=x1, y0=y1;
		theta+=deltaTheta;
		[ x1, y1 ]=calcFromTheta(theta);
	    }
	}
//	console.log(x0, y0, x1, y1);
//	console.log('loop num0 :', calcLoopNum(math.complex(x0, y0)));
//	console.log('loop num1 :', calcLoopNum(math.complex(x1, y1)));
	
	while( Math.sqrt((x1-x0)**2+(y1-y0)**2)>EPSILON ){
	    const x=0.5*(x1+x0), y=0.5*(y1+y0);
	    if( calcLoopNum(math.complex(x, y))===MAX_ITERATION ) x1=x, y1=y;
	    else x0=x, y0=y;
	}
//	console.log('fine search ', x1, y1);
	return [ x1, y1 ];
    }
    if( calcLoopNum(math.complex(x, 0))!==MAX_ITERATION ) x=x0;
    

    console.log('===== Mandelbrot FINISH =====');
    
    function calcLoopNum(c, max=MAX_ITERATION){
       let z=math.complex(0, 0);
        let abs=z.abs;
        for( let i=0; i<max; i++ ){
            z=math.add(math.mul(z, z), c);
            if( z.abs>2 ) return i;
        }
        return max;
    }
});
