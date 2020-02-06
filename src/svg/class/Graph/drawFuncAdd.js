import colorList from './colorList.js'

const N=1000; 

const drawFuncAdd=(g, func, xin_min, xin_max, yin_min, yin_max)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;
    const line=g._g.polyline(x0, y0+0.5*height, x0+width, y0+0.5*height);
    
    line.attr({ strokeWidth:2, stroke: colorList[g._lines.length], fill: 'none' });
    g._lines.push(line);

    const xmax=g.xmax;
    const xmin=g.xmin;

    const delta=(xmax-xmin)/(N-1);
    const x=[], y=[];
    for( let i=0; i<N; i++ ){
	const tmpx=xmin+i*delta;
	x.push(tmpx);
	y.push(func(tmpx));
    }
    
    const ymax=g.ymax;
    const ymin=g.ymin;

    const scaleX=width/(xmax-xmin);
    const scaleY=ymax===ymin ? 0 : height/(ymax-ymin);
    
    let str='';
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
    
    line.attr({ points: str });    
}

export default drawFuncAdd;
