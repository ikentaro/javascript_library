const property=(elem, pName, value)=>{
    if( elem instanceof HTMLElement ) return setProperty(elem, pName, value);
    if( Array.isArray(elem) && elem.every(a=> a instanceof HTMLElement) ) return elem.forEach(a=>{ setProperty(a, pName, value) });
    if( Array.isArray(elem) && elem.every(a=> Array.isArray(a)) ) return elem.forEach(a=>{ property(a, pName, value) });
    if( Array.isArray(elem) && elem.find(a=> a instanceof HTMLElement) ){
	elem.filter(a=> a instanceof HTMLElement).forEach(a=>{ setProperty(a, pName, value) });
	elem.filter(a=> Array.isArray(a) ).forEach(a=>{ property(a, pName, value) });
	return;
    }

    throw new Error('!!!!! html.set.property invalid element typeof(elem) '+typeof(elem)+' !!!!!');
}

export default property;

function setProperty(elem, pName, value){
    if( typeof value!==typeof elem[pName] ) console.warn('type of property is not matched', typeof(elem[pName]), typeof(value));
    elem[pName]=value;
}
