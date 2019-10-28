const refrectConst=1.0;
const expandConst=2.0;
const diminishConst=0.5;
const simplexMinSize=1.0e-8;

const simplex=(data, func, initpar)=>{
    const xarr=data.x
    const yarr=data.y;
    const errarr=data.err;

    if( typeof func!=='function' ) throw new Error('fit.simplexの第二引数はfunctionのみです');
    if( initpar==null ) initpar=[ ...new Array(func.length-1).keys() ].map(a=>1);
    
    console.log('===== fit.simplex START =====');
//    console.log('parameter : ', initpar);
//    console.log('chi2 : ', calcChi2(...initpar));
//    console.log('function :', func);

    const simplex=[ { param: initpar, chi2: calcChi2(...initpar) } ];
    for( let i=0; i<initpar.length; i++ ){
	const newpar=initpar.map(a=> Math.random()*a);
	simplex.push({ param: newpar, chi2: calcChi2(...newpar) });
    }
    simplex.sort(sortFunc);
    while( next()>simplexMinSize ){}
    console.log(simplex[0].param);
    
    function next(){
	const worst=simplex[simplex.length-1];
	console.log('===== before =====');
//	simplex.forEach((a, i)=>{ console.log(i, a.chi2) });
//	console.log('best chi2   :', simplex[0].chi2);
//	console.log('worst2 chi2 :', simplex[simplex.length-2].chi2);
//	console.log('worst chi2  :', worst.chi2);
	function shrink(){
	    console.log('shrink operation');
	    for( let i=1; i<simplex.length; i++ ){
		simplex[i].param=simplex[i].param.map((a, j)=> 0.5*(simplex[0].param[j]+a));
		simplex[i].chi2=calcChi2(...simplex[i].param);
	    }
//	    simplex.chi2.forEach((a, i)=>{ console.log(i, a) });
	}
	
	const centerParam=[ ...new Array(worst.param.length) ].map(a=>0);
	for( let i=0; i<simplex.length; i++ ){ for( let j=0; j<centerParam.length; j++ ){ centerParam[j]+=simplex[i].param[j]; }}	
	for( let j=0; j<centerParam.length; j++ ) centerParam[j]/=simplex.length;

	const reflectParam=centerParam.map((a, i)=> (1.0+refrectConst)*a-refrectConst*worst.param[i]);
	const reflectChi2=calcChi2(...reflectParam);
	console.log('reflect chi2 :', reflectChi2);

	if( reflectChi2<simplex[0].chi2 ){
	    const expandParam=reflectParam.map((a, i)=> expandConst*a+(1.0-expandConst)*centerParam[i]);
	    const expandChi2=calcChi2(...expandParam);
	    console.log('expand chi2  :', expandChi2);
	    
	    if( expandChi2<reflectChi2 ){ worst.param=expandParam;  worst.chi2=expandChi2;  }
	    else{                         worst.param=reflectParam; worst.chi2=reflectChi2; }
	}
	else if( reflectChi2<simplex[simplex.length-2].chi2 ){  worst.param=reflectParam; worst.chi2=reflectChi2; }
	else if( reflectChi2<worst.chi2){ 
	    const diminishParam=worst.param.map((a,i)=> diminishConst*a+(1.0-diminishConst)*centerParam[i]);
	    const diminishChi2=calcChi2(...diminishParam);
	    if( diminishChi2<worst.chi2 ){
		console.log('diminish chi2 :', diminishChi2);
		worst.param=diminishParam; worst.chi2=diminishChi2;
	    }
	    else shrink();
	}
	else shrink();

	simplex.sort(sortFunc);
	console.log('===== after =====');
//	simplex.forEach((a, i)=>{ console.log(i, a.chi2) });

	console.log('judge param :', 2*Math.abs(simplex[simplex.length-1].chi2-simplex[0].chi2)/(simplex[simplex.length-1].chi2+simplex[0].chi2));
	return 2*Math.abs(simplex[simplex.length-1].chi2-simplex[0].chi2)/(simplex[simplex.length-1].chi2+simplex[0].chi2);
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
