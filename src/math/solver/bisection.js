const MAX_COUNT=10000;

const bisection=(func, x0, x1, thre=1.0e-8)=>{
//    console.log('===== solver.bysection START  =====');
    let y0=func(x0), y1=func(x1);
    let xmid=0.5*(x1+x0);
    let ymid=func(xmid);
    if( y0*y1>0 ){　throw new Error(`solver.bysection f(x0=${x0})=${y0}  f(x1=${x1})=${y1} was invalid parameter`); }

//    console.log(`x0=${x0} xmid=${xmid} x1=${x1} y0=${y0} ymid=${ymid} y1=${y1}`);
    const isBreak=(ans0, ans_mid, ans1)=>{
	if( Math.abs(ans0, ans_mid)>thre ) return false;
	if( Math.abs(ans1, ans_mid)>thre ) return false;
	return true;
    }

    for( let count=0; ; count++ ){
	if( isBreak(y0, ymid, y1 ) ) break;
//	console.log(`i=${count}  x0=${x0} xmid=${xmid} x1=${x1} y0=${y0} ymid=${ymid} y1=${y1}`);
	if( y0*ymid>0 ){
	    y0=ymid;
	    x0=xmid;
	}
	else{
	    y1=ymid;
	    x1=xmid;
	}
	xmid=0.5*(x0+x1);
	ymid=func(xmid);
	
	if( count===MAX_COUNT ) throw new Error(`solver.bisection iteration=${count} over`);
    }
//    console.log(`f(x0=${x0})=${y0}`, `f(xmid=${xmid})=${ymid}`, `f(x1=${x1})=${y1}`);
//    console.log('===== solver.bysection FINISH =====');
    return xmid;
}

export default bisection;
