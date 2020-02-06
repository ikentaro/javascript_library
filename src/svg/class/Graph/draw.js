const draw=(g, x, y)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;
    const line=g.line(0);
    const xmax=g.xmax==null ? Math.max(...x) : g.xmax;
    const xmin=g.xmin==null ? Math.min(...x) : g.xmin;
    const ymax=g.ymax==null ? Math.max(...y) : g.ymax;
    const ymin=g.ymin==null ? Math.min(...y) : g.ymin;
    const scaleX=width/(xmax-xmin);
    const scaleY=ymax===ymin ? 0 : height/(ymax-ymin);
    let str='';
    //    console.log('scaleX', scaleX, 'scaleY', scaleY);
    
    if( scaleY===0 ){
	for( let i=0; i<x.length; i++ ){
	    const xval=x0+scaleX*(x[i]-xmin), yval=y0-0.5*height;
	    str+=xval+','+yval+',';
	}
    }
    else{
	for( let i=0; i<x.length; i++ ){
	    if( y[i]<ymin ) y[i]=ymin;
	    if( y[i]>ymax ) y[i]=ymax;
	    let xval=x0+scaleX*(x[i]-xmin);
	    let yval=y0-scaleY*(y[i]-ymin);
	    str+=xval+','+yval+',';
	}
    }
    str=str.slice(0, -1);
    g.xmax=xmax, g.xmin=xmin, g.ymax=ymax, g.ymin=ymin;
    //    console.log('str :',str);
    //    console.log('ymax :', ymax);
    //    console.log('ymin :', ymin);
    
    line.attr({ points: str });
}

export default draw;
