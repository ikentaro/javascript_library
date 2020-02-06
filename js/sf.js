window.addEventListener('DOMContentLoaded', ()=>{
    console.log('===== Read SoudFont START =====');
    const sf2Elem=document.getElementById('sf2-file');
    const presetTBody=document.getElementById('preset-tbody');
    const sf2Files={};
    const modalConfig=setModal();
    modalConfig.close();
    modalConfig.main.append(doc.create('div', { id: 'svg-graph', style: { width: '100%', height: '100%' } }));

    [ ...sf2Elem.children ].forEach(async (a)=>{
	const data=await read.sf2(a.value);
	console.log(data);
	setInfo(data);
    });

    console.log('===== Read SoudFont FINISH =====');
    function setInfo(data){
	html.set.value( doc.get.id([ 'sf-version', 'sf-engin', 'sf-name', 'sf-desiner', 'sf-date', 'sf-copyright', 'sf-comment' ]), 'value',
			[ data.version, data.engin, data.name, data.desiner, data.date, data.copyright, data.comment ]);

	presetTBody.innerHTML='';
	presetTBody.appendChild(doc.table.row.th([ '名前', 'バンクID', 'MIDI番号', 'ノート番号', 'ベロシティ', '', '']));
	data.presets.forEach(a=>{
	    const noteNos=[];
	    const noteNo=doc.createSelect([ ...Array(128).keys() ].map((a, i)=>{ return { innerHTML: numToNoteNo(i), value: i }; }));
	    [ ...noteNo.children ].find(a=> a.value==60).selected=true;
	    const velocity=doc.create('input', { type: 'number', min: 0, max: 128, value: 0, step: 1 });
	    const soundBtn=doc.create('input', { type: 'button', value: '鳴らす' });
	    const drawBtn =doc.create('input', { type: 'button', value: '描画' });
	    html.add.event(drawBtn, 'click', ()=>{
		modalConfig.open();
		console.log(a.getZones(Number([ ...noteNo.children ].find(a=>a.selected).value), Number(velocity.value)));
	    });
	    presetTBody.appendChild(doc.table.row.td([ a.name, a.bankID, a.MIDINumber, noteNo, velocity, drawBtn, soundBtn ]));
	});
    }
});


function numToNoteNo(num){
    const noteNameList=[ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ]; 
    const noteName=noteNameList[num%12];
    const octaveNum=Math.floor(num/12);
    
    return noteName+' ('+(octaveNum-2)+')';
}

