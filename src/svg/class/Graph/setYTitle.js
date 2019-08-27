const setYTitle=(g, string)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;

    g._g.text(x0-0.05*width, y0+0.5*height, string).attr({textAnchor:"end", dominantBaseline:"middle"});
}

export default setYTitle;
