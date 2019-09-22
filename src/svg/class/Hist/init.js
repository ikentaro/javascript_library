const init=(h, data, label)=>{
    h._bins=[];
    for( let i=0; i<label.length; i++ ) h._bins.push({ 'label': label[i], content: data[i] });
    h._bins.push({ 'label': null, content: 0 });

    const height=h.disp.height.animVal.value;
    const scaleX=h.disp.width.animVal.value/label.length;
    const x0    =h.disp.x.animVal.value;
    const y0    =h.disp.y.animVal.value+height;
        
    let i=0;
    for( const obj of h._bins ){
	if( obj.label==null ) continue;
	obj.svgXLabel=h._g.text(x0+(0.5+i)*scaleX, y0+0.02*height, String(obj.label)).attr({ textAnchor: 'middle', dominantBaseline: 'hanging' });
	i++;
    }
}

export default init;
