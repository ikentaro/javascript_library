const draw=(g, x, y)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;
    const line=g.line(0);
    const xmax=Math.max(...x), xmin=Math.min(...x), ymax=Math.max(...y), ymin=Math.min(...y);
    const scaleX=width/(xmax-xmin);
    const scaleY=ymax===ymin ? 0 : height/(ymax-ymin);
    let str='';
//    console.log('scaleX', scaleX, 'scaleY', scaleY);

    if( scaleY===0 ){
	for( let i=0; i<x.length; i++ ){
	    const xval=x0+scaleX*(x[i]-xmin);
	    const yval=y0-0.5*height;
	    str+=xval+','+yval+',';
	}
    }
    else{
	for( let i=0; i<x.length; i++ ){
	    const xval=x0+scaleX*(x[i]-xmin);
	    const yval=y0-scaleY*(y[i]-ymin);
	    str+=xval+','+yval+',';
	}
    }
    str=str.slice(0, -1);
//    console.log('str :',str);
//    console.log('ymax :', ymax);
//    console.log('ymin :', ymin);
    
    line.attr({ points: str });
}

export default draw;
