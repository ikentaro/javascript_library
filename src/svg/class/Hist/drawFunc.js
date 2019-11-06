const drawFunc=(h, func)=>{  
    const width=h.disp.width.animVal.value, height=h.disp.height.animVal.value, x0=h.disp.x.animVal.value, y0=h.disp.y.animVal.value+height;
    const max=h._bins.reduce((max, a)=> max>a.content ? max : a.content, 0);
    const scaleY=height/(1.1*(max+Math.sqrt(max))), scaleX=width/(h._bins.length-1);

    const arr=[];
    for( let i=0; i<h._bins.length-1; i++ ){
	arr.push(x0+scaleX*(Number(h._bins[i].label)-Number(h._bins[0].label)), y0-scaleY*func(Number(h._bins[i].label)));
    }
    const elem=h._g.polyline(arr).attr({ strokeWidth: 2, stroke: 'red', fill: 'none' });

    h._drawObj.push({ object: func, 'elem': elem });
}

export default drawFunc;
