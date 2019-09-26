const draw=(h)=>{
    const width=h.disp.width.animVal.value, height=h.disp.height.animVal.value, x0=h.disp.x.animVal.value, y0=h.disp.y.animVal.value+height;
    const max=h._bins.reduce((max, a)=> max>a.content ? max : a.content, 0);
    const scaleY=height/(1.1*(max+Math.sqrt(max))), scaleX=width/(h._bins.length-1);
    
    for( let i=0; i<h._bins.length-1; i++ ){	
	const barLength=h._bins[i].content*scaleY;
	const barPos=y0-barLength, sqrtContLen=Math.sqrt(h._bins[i].content)*scaleY;
	
	if( h._bins[i].elem==null ) h._bins[i].elem=h._g.rect(x0+i*scaleX, barPos, scaleX, barLength).attr({stroke: 'none', fill: 'cyan' });
	else h._bins[i].elem.attr({ 'x': x0+i*scaleX, 'y': barPos, 'width': scaleX, 'height': barLength });
	
	if( h._bins[i].bar==null ) h._bins[i].bar=h._g.line(x0+i*scaleX, barPos, x0+(i+1)*scaleX, barPos).attr({stroke: 'black', strokeWidth: 2 });
	else h._bins[i].bar.attr({ 'x1': x0+i*scaleX, 'y1': barPos, 'x2': x0+(i+1)*scaleX, 'y2': barPos });

	if( h._bins[i].errbar==null ) h._bins[i].errbar=h._g.line(x0+(i+0.5)*scaleX, barPos-sqrtContLen, x0+(i+0.5)*scaleX, barPos+sqrtContLen).attr({stroke: 'black', strokeWidth: 2 });
	else h._bins[i].errbar.attr({ 'x1': x0+(i+0.5)*scaleX, 'y1': barPos-sqrtContLen, 'x2': x0+(i+0.5)*scaleX, 'y2': barPos+sqrtContLen });
    }
    const grid=getGrid(1.1*max);
    
    if( h._labelY==null ) h._labelY=[];
    else{ h._labelY.forEach(a=> a.remove()); h._labelY=[]; }
    for( let l=0; l<1.1*(max+Math.sqrt(max)); l+=grid ){ h._labelY.push(h._g.text(x0, y0-scaleY*l, String(l)).attr({textAnchor:"end", dominantBaseline:"middle"})); }

    const entries=h._bins.reduce((sum, a)=> sum+a.content, 0);
    if( h._stat==null ) h._stat=h._g.text(x0+width, y0-height, `Entries : ${entries}`).attr({textAnchor: "end", domainantBaseline:'hanging'});
    else h._stat.attr({ text: `Entries : ${entries}` });
}

export default draw;

function getGrid(max){
    let grid=5;
    const isGood=(grid)=>{ return 5<max/grid && max/grid<=12.5; };
    
    while( !isGood(grid) ){
	if( Number.isInteger(grid/2)===false ) grid*=2;
	else if( isGood(grid*2) ){ grid*=2; break; }
	else grid*=5;
    }
    return grid;
}
