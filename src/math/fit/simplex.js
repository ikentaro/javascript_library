const simplex=(data, func, initpar)=>{
    const xarr=data.x
    const yarr=data.y;
    const errarr=data.err;

    if( typeof func!=='function' ) throw new Error('fit.simplexの第二引数はfunctionのみです');
    if( initpar==null ) initpar=[ ...new Array(func.length-1).keys() ].map(a=>1);
    
    console.log('===== fit.simplex START =====');
    console.log('parameter : ', initpar);
    console.log('chi2 : ', calcChi2(...initpar));
    console.log('function :', func);

    const simplex=[ { param: initpar, chi2: calcChi2(...initpar) } ];
    for( let i=0; i<initpar.length; i++ ){
	const newpar=initpar.map(a=> Math.random()*a);
	simplex.push({ param: newpar, chi2: calcChi2(...newpar) });
    }
    simplex.sort(sortFunc);
    console.log(simplex.map(a=> a.chi2));
    next();
    
    function next(){
	const worst=simplex.pop();
	const nextParam=[ ...new Array(worst.param.length) ].map(a=>0);
	for( let i=0; i<simplex.length; i++ ){
	    for( let j=0; j<nextParam.length; j++ ){
		nextParam[j]+=simplex[i].param[j];
	    }
	}
	for( let j=0; j<nextParam.length; j++ ) nextParam[j]/=simplex.length;
	console.log('next param :', nextParam);
    }
    
    function sortFunc(a, b){
	if( b.chi2<a.chi2 ) return 1;
	if( a.chi2<b.chi2 ) return -1;
	throw new ERror('Simplexが縮退しました 適切なパラメーターでやり直して下さい');
    }
    
    function calcChi2(...param){
	let sum=0;
	for( let i=0; i<xarr.length; i++ ){
	    if( errarr[i]>0 ){
		sum+=Math.pow((yarr[i]-func(xarr[i], ...param))/errarr[i], 2);
//		console.log(yarr[i], func(xarr[i], ...param), errarr[i]);
	    }
	}
	return sum;
    }
}

export default simplex;
