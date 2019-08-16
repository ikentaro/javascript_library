const connect=(...args)=>{
    console.log('audio connection');

    for( let i=0; i<args.length-1; i++ ){
	const input = args[i];
	const next  = args[i+1];
	if( next.inputs!=null && Array.isArray(next.inputs) ){
	    next.inputs.forEach(a=>{ input.connect(a) });
	}
	else{
	    input.connect(next);
	}
    }
      
    return args[args.length-1];
}

export default connect;
