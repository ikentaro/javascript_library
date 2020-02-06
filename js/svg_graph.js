const MAX_LEGENDRE = 25;
const MAX_HERMITE  = 25;
const MAX_LAGUERRE = 25;

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== SVG Graph START  =====');
    const can=document.getElementById('canvas');
    const costumElem=document.getElementById('custom');
    document.getElementById('assoc-degree').addEventListener('change', draw);
    
    svg.config.setPaper(can);
    const graph=svg.graph(0, 0, can.clientWidth, can.clientHeight);
    draw();
    document.getElementById('draw-type').addEventListener('change', draw);
    document.getElementById('custom-draw').addEventListener('click', drawCustom);

    function drawCustom(){
	const body='return '+document.getElementById('custom-body').value;
	graph.clear();
	graph.drawFunc(new Function('x', body), -5, 5, -5, 5);
    }
    function draw(){
	const selected=[ ... document.getElementById('draw-type').children ].find(a=> a.selected);
	graph.clear();
	if( selected.value==='custom' ) costumElem.style.display='block';
	else costumElem.style.display='none';
	
	if( selected.value.includes('assoc' ) ) document.getElementById('assoc').style.display='block'; 
	else  document.getElementById('assoc').style.display='none';
	
	if( selected.value==='trigono' ){
	    graph.drawFunc(Math.sin, -Math.PI, Math.PI, -1.0, 1.0);
	    graph.drawFuncAdd(Math.cos);
	    graph.drawFuncAdd(Math.tan);
	    graph.setYLabel(0.5);
	    graph.setXLabel(0.5);
	}
	else if( selected.value==='explog' ){
	    graph.drawFunc(Math.exp, -2, 2, -5, 5);
	    graph.drawFuncAdd(x=> x>0? Math.log(x) : -5 ); // to avoid NaN
	    graph.setYLabel(1);
	    graph.setXLabel(1);
	}
	else if( selected.value==='legendre' ){
	    graph.drawFunc(x=> math.legendre(0, x), -1, 1, -1, 1);
	    const dphi=360/(MAX_LEGENDRE+1);
	    graph.line(0).attr({ stroke: hslToRGB(0, 100, 50) });
	    for( let i=1; i<=MAX_LEGENDRE; i++ ){
		graph.drawFuncAdd(x=> math.legendre(i, x));
		graph.line(i).attr({ stroke: hslToRGB(dphi*i, 100, 50) });
	    }
	    graph.setYLabel(0.25);
	    graph.setXLabel(0.25);
	}
	else if( selected.value==='hermite' ){
	    graph.drawFunc(x=> math.hermite(0, x)*Math.exp(-x*x/2), -10, 10, -5, 5);
	    const dphi=360/(MAX_HERMITE+1);
	    graph.line(0).attr({ stroke: hslToRGB(0, 100, 50) });
	    for( let i=1; i<=MAX_HERMITE; i++ ){
		graph.drawFuncAdd(x=> math.hermite(i, x)*Math.exp(-x*x/2)/Math.sqrt((Math.pow(2, i)*factorial(i))));
		graph.line(i).attr({ stroke: hslToRGB(dphi*i, 100, 50) });
	    }
	    graph.setYLabel(1);
	    graph.setXLabel(1);
	}
	else if( selected.value==='laguerre' ){
	    graph.drawFunc(x=> math.laguerre(0, x)*Math.exp(-x/2), 0, 100, -1, 1);
	    const dphi=360/(MAX_LAGUERRE+1);
	    graph.line(0).attr({ stroke: hslToRGB(0, 100, 50) });
	    for( let i=1; i<=MAX_LAGUERRE; i++ ){
		graph.drawFuncAdd(x=> math.laguerre(i, x)*Math.exp(-x/2)/factorial(i));
		graph.line(i).attr({ stroke: hslToRGB(dphi*i, 100, 50) });
	    }
	    graph.setYLabel(0.5);
	    graph.setXLabel(5);
	}
	else if( selected.value==='assoc-legendre' ){
	    const l=Number(document.getElementById('assoc-degree').value);
	    const dphi=360/(2*l+1);
	    graph.drawFunc(x=> math.assocLegendre(l, l, x)*Math.sqrt(0.5*(2*l+1)/factorial(2*l)), -1, 1, -3, 3);
	    graph.line(0).attr({ stroke: hslToRGB(0, 100, 50) });	    
	    for( let m=l-1; m>=-l; m-- ){
	     	graph.drawFuncAdd(x=> math.assocLegendre(l, m, x)*Math.sqrt(0.5*(2*l+1)*factorial(l-m)/factorial(l+m)));
		graph.line(graph._lines.length-1).attr({ stroke: hslToRGB(dphi*(l-m), 100, 50) });
	    }
	    graph.setYLabel(0.5);
	    graph.setXLabel(0.5);
	}
	else if( selected.value==='assoc-laguerre' ){
	    const l=Number(document.getElementById('assoc-degree').value);
	    const dphi=360/(l+1);
	    graph.drawFunc(x=> math.assocLaguerre(l, l, x)*Math.sqrt(factorial(l)/factorial(2*l))*Math.exp(-x)*Math.pow(x, l/2), 0, 10, -1, 1);
//	    graph.drawFunc(x=> math.assocLaguerre(l, l, x), 0, 5, -5, 20);
	    graph.line(0).attr({ stroke: hslToRGB(0, 100, 50) });
	    for( let m=l-1; m>=0; m-- ){
	     	graph.drawFuncAdd(x=> math.assocLaguerre(l, m, x)*Math.sqrt(factorial(l)/factorial(l+m))*Math.exp(-x)*Math.pow(x, m/2));
//		graph.drawFuncAdd(x=> math.assocLaguerre(l, m, x));
		graph.line(graph._lines.length-1).attr({ stroke: hslToRGB(dphi*(l-m), 100, 50) });
	    }
	    graph.setYLabel(1);
	    graph.setXLabel(0.5);
	}
    }
    console.log('===== SVG Graph FINISH =====');
});

function factorial(n){
    let result=1;
    for( let i=1; i<=n; i++ ) result*=i;
//    console.log(result);
    return result;
}

function hslToRGB(h, s, l){
    if( typeof h!=='number' || h<0 || 360<h ) throw new Error('!!!!! hslToRGB  h should be [ 0:360 ] !!!!!');
    if( typeof s!=='number' || s<0 || 100<s ) throw new Error('!!!!! hslToRGB  s should be [ 0:100 ] !!!!!');
    if( typeof l!=='number' || l<0 || 100<l ) throw new Error('!!!!! hslToRGB  l should be [ 0:100 ] !!!!!');

    let max, min;
    if( l<50 ){
	max=2.55*(l+l*s/100);
	min=2.55*(l-l*s/100);
    }
    else{
	max=2.55*(l+(100-l)*s/100);
	min=2.55*(l-(100-l)*s/100);
    }
    
    let r, g, b;
    if( 0<=h && h<60 ){
	r=Math.round(max);
	g=Math.round(h/60*(max-min)+min);
	b=Math.round(min);
    }
    else if( 60<=h && h<120 ){
	r=Math.round(((120-h)/60)*(max-min)+min);
	g=Math.round(max);
	b=Math.round(min);
    }
    else if( 120<=h && h<180 ){
	r=Math.round(min);
	g=Math.round(max);
	b=Math.round(((h-120)/60)*(max-min)+min);
    }
    else if( 180<=h && h<240 ){
	r=Math.round(min);
	g=Math.round(((240-h)/60)*(max-min)+min);
	b=Math.round(max);
    }
    else if( 240<=h && h<300 ){
	r=Math.round(((h-240)/60)*(max-min)+min);
	g=Math.round(min);
	b=Math.round(max);
    }
    else if( 300<=h && h<=360 ){
	r=Math.round(max);
	g=Math.round(min);
	b=Math.round(((360-h)/60*(max-min)+min));
    }
    return '#'+('00'+r.toString(16)).slice(-2)+('00'+g.toString(16)).slice(-2)+('00'+b.toString(16)).slice(-2);
}

