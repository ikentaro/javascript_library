const setXLabel=(g, div)=>{
    const width=g.disp.width.animVal.value;
    const height=g.disp.height.animVal.value;
    const x0=g.disp.x.animVal.value;
    const y0=g.disp.y.animVal.value+height;

    const xmax=g.xmax==null ? 0 : g.xmax;
    const xmin=g.xmin==null ? 0 : g.xmin;
    const scaleX=width/(xmax-xmin);

    const remind=xmin%div
    for( let x=xmin-remind; x<=xmax; x+=div){
	const xpos=x0+scaleX*(x-xmin);
	g._g.text(xpos, y0, String(x)).attr({textAnchor:"middle", dominantBaseline:"hanging"});
    }
}

export default setXLabel;
