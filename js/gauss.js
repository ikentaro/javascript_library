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

    console.log(gauss(0, 1, 0, 1));
    for( let i=0; i<1000; i++ ){ hist.fill(Math.round(math.random.gauss(0, 10))); }
    hist.draw();
    
    math.fit.simplex({ x: hist.labelArray().map(a=> Number(a)), y: hist.contentArray(), err: hist.contentArray().map(a=> Math.sqrt(a)) },
		     gauss, [ Math.max(...hist.contentArray()), 0, 10 ]);

    function gauss(x, scale, mean, sigma){ return scale*Math.exp(-Math.pow((x-mean)/sigma, 2)/2) }; 
    document.getElementById('btn-reset').addEventListener('click', ()=>{ hist.reset(); });
    console.log('===== Gauss Dist. FINISH =====');
});
