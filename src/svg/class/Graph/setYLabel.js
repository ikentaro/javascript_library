const setYLabel=(g, div)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;

    const ymax=g.ymax==null ? 0 : g.ymax;
    const ymin=g.ymin==null ? 0 : g.ymin;
    const scaleY=ymax===ymin ? 0 : height/(ymax-ymin);

    for( let y=ymin; y<=ymax; y+=div){
        const ypos=y0-scaleY*(y-ymin);
        g._g.text(x0, ypos, String(y)).attr({textAnchor:"end", dominantBaseline:"middle"});
    }
}

export default setYLabel;

