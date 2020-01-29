const style=(elem, styleObj)=>{
    for( const [ key, val ] of Object.entries(styleObj) ){
	console.log('set style', key, val);
	elem.style[key]=val;
    }
}

export default style;
