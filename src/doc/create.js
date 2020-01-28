import style from '../html/set/style.js'

const create=(tag, content)=>{
    const elem=document.createElement(tag);
    if( typeof content==null ) return elem;
    else if( typeof content==='string' || typeof content==='number' ){
	elem.innerHTML=content;
	return elem;
    }
    else if( content instanceof HTMLElement ){
	elem.append(content);
	return elem;
    }
    else if( typeof content==='object' ){
	for( const [ key, val ] of Object.entries(content) ){
	    if( key==='style' ) style(elem, val);
	    else elem[key]=val;
	}
	return elem;
    }
    throw new Error('!!!!! doc.create('+tag+' invalid content !!!!!');
}

export default create;
