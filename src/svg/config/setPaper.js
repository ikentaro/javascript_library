const setPaper=(config, elem)=>{
    if( elem instanceof HTMLElement ){
	config.paper=Snap(elem.clientWidth, elem.clientHeight);
	config.paper.appendTo(elem);
    }
    else throw new Error('!!!!! elem unknown type '+(typeof elem)+' !!!!');
}

export default setPaper;
