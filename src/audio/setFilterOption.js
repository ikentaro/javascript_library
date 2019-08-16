const list=[
    { name: 'lowpass',   ja:'ローパス' },
    { name: 'highpass',  ja:'ハイパス' },
    { name: 'bandpass',  ja:'バンドパス' },
    { name: 'lowshelf',  ja:'ローシェルフ' },
    { name: 'highshelf', ja:'ハイシェルフ' }, 
    { name: 'peaking',   ja:'ピーキング' },
    { name: 'notch',     ja:'ノッチ' },
    { name: 'allpass',   ja:'オールパス' },
];

const setFilterOption=(filter, select, ja=true)=>{
    for( const a of list ){
	const option=document.createElement('option');
	option.value=a.name;
	option.innerHTML=ja ? a.ja : a.name;

	select.appendChild(option);
    }
    const option=[ ...select.children ].filter(a=> a.value===filter.type)[0]
    if( option!=null ) option.selected=true;
    
    select.addEventListener('change', ()=>{
	const option=select[select.selectedIndex];
	filter.type=option.value;
	console.log('===== set filter type ', filter.type, '=====');
    });
}



export default setFilterOption;
