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
    
    console.log(math.random.gauss(0, 1));

    document.getElementById('btn-reset').addEventListener('click', ()=>{ hist.reset(); });
    console.log('===== Gauss Dist. FINISH =====');
});
