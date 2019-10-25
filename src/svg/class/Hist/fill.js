const fill=(h, label, weight=1.0)=>{
    const bin=h._bins.find(a=> a.label==label);
    
    if( bin!=null ){ bin.content++; }
    else{
//	console.log(`bin:${label}が見つかりませんでした`);
	h._bins[h._bins.length-1].content++;
    }
};

export default fill;
