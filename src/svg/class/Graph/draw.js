const draw=(g, x, y)=>{
    console.log('Graph :',g);
    console.log('x', x);
    console.log('y', y);
    
    const width=g.disp.width.animVal.value, height=g.disp.height.animVal.value, x0=g.disp.x.animVal.value, y0=g.disp.y.animVal.value;
    const line=g.line(0);
    const xmax=Math.max(...x), xmin=Math.min(...x), ymax=Math.max(...y), ymin=Math.min(...y);
    const scaleX=width/(xmax-xmin);
    const scaleY=ymax===ymin ? 0 : height/(ymax-ymin);
    let str='';
    console.log('scaleX', scaleX, 'scaleY', scaleY);
    for( let i=0; i<x.length; i++ ){
	const xval=x0+scaleX*(x[i]-xmin);
	const yval=y0+0.5*height+scaleY*(y[i]-ymin);
	str+=xval+','+yval+',';
    }
    str=str.slice(0, -1);
//    console.log('str :',str);
    
    line.attr({ points: str });
}

export default draw;
