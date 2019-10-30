window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Gauss Dist. START  =====');
    const canvas=document.getElementById('svg-canvas');
    svg.config.setPaper(canvas);
    const arr=[ ...new Array(201).keys() ];
    const hist=svg.hist( arr.map(a=>0), arr.map(a=> a-100), 10 );
    document.getElementById('btn-exec').addEventListener('click', ()=>{
	const num  =Number(document.getElementById('input-num').value);
	const mean =Number(document.getElementById('input-mean').value);
	const sigma=Number(document.getElementById('input-sigma').value);
	
	for( let i=0; i<num; i++ ){ hist.fill(Math.round(math.random.gauss(mean, sigma))); }
	
	hist.draw();
    });
    
    document.getElementById('btn-reset').addEventListener('click', ()=>{ hist.reset(); });
    
    document.getElementById('btn-fit').addEventListener('click', ()=>{
	const result= math.fit.simplex({ x: hist.labelArray().map(a=> Number(a)), y: hist.contentArray(), err: hist.contentArray().map(a=> Math.sqrt(a)) },
				       gauss,
				       [ Math.max(...hist.contentArray()), Number(document.getElementById('input-mean').value), Number(document.getElementById('input-sigma').value) ]);
	console.log('===== Fitting Result =====');
	console.log('parameter  :', ...result.param);
	console.log('chi-square :', result.chi2);
	hist.drawFunc(result.function);

	document.getElementById('fit-mean').value=result.param[1];
	document.getElementById('fit-sigma').value=result.param[2];
    });
							 
    function gauss(x, scale, mean, sigma){ return scale*Math.exp(-Math.pow((x-mean)/sigma, 2)/2) }; 

    console.log('===== Gauss Dist. FINISH =====');
});
