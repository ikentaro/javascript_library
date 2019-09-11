const create=(arg)=>{
    if( typeof arg==='string' ) return document.createElement(arg);
    else if( Array.isArray(arg) && arg.every(a=> typeof a==='string') )
}

export default create;
