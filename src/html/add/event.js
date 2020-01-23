const event=(elem, evName, func)=>{
    // 早期return を使った型分別
    if( elem instanceof HTMLElement ) return elem.addEventListener(evName, func);
    if( Array.isArray(elem) && elem.every(a=> a instanceof HTMLElement) ) return elem.forEach(a=>{ a.addEventListener(evName, func); });
    if( Array.isArray(elem) && elem.every(a=> Array.isArray(a)) ) return elem.forEach(a=>{ event(a, evName, func) });
    if( Array.isArray(elem) && elem.find(a=> a instanceof HTMLElement) ){
	elem.filter(a=> a instanceof HTMLElement).forEach(a=>{ a.addEventListener(evName, func); });
	elem.filter(a=> Array.isArray(a) ).forEach(a=> event(a, evName, func));
	return;
    }
    
    throw new Error('!!!!! html.add.event invalid element typeof(elem) '+typeof(elem)+'!!!!!');
}

export default event;
