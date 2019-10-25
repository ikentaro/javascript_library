const reset=(h)=>{
    h._bins.forEach(bin=>{
	bin.elem.reset();
	bin.bar.reset();
	bin.errBar.reset();
    });
};

export default reset;
