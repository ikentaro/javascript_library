const init=(h, data, label, labelWidth)=>{
    h._bins=[];
    for( let i=0; i<label.length; i++ ) h._bins.push({ 'label': label[i], content: data[i] });
    h._bins.push({ 'label': null, content: 0 });
    console.log('lW :', labelWidth);
    
    const height=h.disp.height.animVal.value;
    const scaleX=h.disp.width.animVal.value/label.length;
    const x0    =h.disp.x.animVal.value;
    const y0    =h.disp.y.animVal.value+height;
        
    let i=0;
    for( const obj of h._bins ){
//	console.log('i=', i, i%labelWidth);
	if( i%labelWidth!=0 ){ i++; continue; }
	if( obj.label==null ) continue;
	i++;
	obj.svgXLabel=h._g.text(x0+(0.5+i)*scaleX, y0+0.02*height, String(obj.label)).attr({ textAnchor: 'middle', dominantBaseline: 'hanging' });
    }
}

export default init;
