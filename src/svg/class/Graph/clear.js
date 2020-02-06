const clear=(g)=>{
    [ ...g.node.children].forEach(a=>{ if( a!==g.disp ) a.remove(); });
    g._lines=[];
    const width=g.disp.width.animVal.value, height=g.disp.height.animVal.value, x0=g.disp.x.animVal.value, y0=g.disp.y.animVal.value;
    g._lines.push( g._g.polyline(x0, y0+0.5*height, x0+width, y0+0.5*height).attr({ strokeWidth:2, stroke: 'blue', fill: 'none' }) );
}

export default clear;
