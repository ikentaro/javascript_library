const event=(elem, evName, func, isExec=false)=>{
    // 早期return を使った型分別
    if( elem instanceof HTMLElement ) addEvent(elem, evName, func, isExec);
    else if( Array.isArray(elem) && elem.every(a=> a instanceof HTMLElement) ) elem.forEach(a=>{ addEvent(a, evName, func, isExec); });
    else if( Array.isArray(elem) && elem.every(a=> Array.isArray(a)) ) elem.forEach(a=>{ event(a, evName, func, isExec) });
    else if( Array.isArray(elem) && elem.find(a=> a instanceof HTMLElement) ){
	elem.filter(a=> a instanceof HTMLElement).forEach(a=>{ addEvent(a, evName, func, isExec); });
	elem.filter(a=> Array.isArray(a) ).forEach(a=> event(a, evName, func, isExec));
    }
    else throw new Error('!!!!! html.add.event invalid element typeof(elem) '+typeof(elem)+'!!!!!');
}

export default event;

function addEvent(elem, evName, func, isExec){
    elem.addEventListener(evName, func);
    if( isExec ) elem.dispatchEvent(new Event(evName));
}
