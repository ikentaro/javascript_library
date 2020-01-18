window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Read SoudFont START =====');
    const sf2Elem=document.getElementById('sf2-file');
    const sf2Files={};
    [ ...sf2Elem.children ].forEach(async (a)=>{
	const data=await read.sf2(a.value);
	
	console.log(data);
    });
    
    console.log('===== Read SoudFont FINISH =====');
});


