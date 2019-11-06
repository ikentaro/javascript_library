const list=[
    { name: 'sine',      ja:'正弦波' },
    { name: 'square',    ja:'矩形波' },
    { name: 'sawtooth',  ja:'ノコギリ波' },
    { name: 'triangle',  ja:'三角波' },
    { name: 'custom',    ja:'カスタム' }
];

const setOscillatorType=(filter, select, ja=true, custom=false)=>{
    for( const a of list ){
	if( a.name==='custom' && custom===false ) continue;
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

export default setOscillatorType;
