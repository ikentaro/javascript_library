window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Two Dice START  =====');
    const canvas=document.getElementById('svg-canvas');
    svg.config.setPaper(canvas);
    const hist=svg.hist([0, 0, 0, 0, 0, 0 ], [1, 2, 3, 4, 5, 6]);
    document.getElementById('btn-exec').addEventListener('click', ()=>{
	const N     = Number(document.getElementById('input-loop').value);
	const max   = Number(document.getElementById('input-n').value);
	const ratio = 0.01*Number(document.getElementById('input-ratio').value);
	for( let i=0; i<N; i++ ){
	    if( math.random.lgc.zeroToOne()>ratio )　hist.fill(Math.floor(6*math.random.lgc.zeroToOne()+1));
	    else                                     hist.fill(Math.floor(max*math.random.lgc.zeroToOne()+1));
	}

	hist.draw();
    });

    document.getElementById('btn-reset').addEventListener('click', ()=>{ hist.reset(); });
    console.log('===== Two Dice FINISH =====');
});
