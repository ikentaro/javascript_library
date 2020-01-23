const id=(arg)=>{
    if( typeof arg==='string' ) return document.getElementById(arg);
    if( Array.isArray(arg) && arg.every(a=> typeof a==='string') ) return arg.map(a=> document.getElementById(a));
    if( Array.isArray(arg) && arg.every(a=> Array.isArray(a)) )    return arg.map(a=> id(a));
    
    throw new Error('!!!!! doc.get.id invailed argment typeof(id)='+typeof(id)+'!!!!!');
}

export default id;
