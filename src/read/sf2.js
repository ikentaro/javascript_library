import readInfo        from './sf2/readInfo.js'
import makeSample      from './sf2/makeSample.js'
import parseInstHeader from './sf2/parseInstHeader.js'
import parseGenMod     from './sf2/parseGenMod.js'
import parsePresetHeader from './sf2/parsePresetHeader.js'
import parsePreset from './sf2/parsePreset.js'
import parseInst   from './sf2/parseInst.js'

const sf2=(promise)=>{
    console.log('===== Read SoundFont2 File START =====');
    promise.then(data=>{
	const [ infoChunk, sampleChunk, presetChunk ] = check(data).data;
	const [ presetHeader, presetBag, presetModulator, presetGenerator, instHeader, instBag, instModulator, instGenerator, sampleHeader ]=presetChunk.data;
	const infoData=readInfo(infoChunk);
	const samples=makeSample(sampleHeader, sampleChunk);
	const instList=parseInstHeader(instHeader, instBag);
	instList.forEach(a=> parseGenMod(a.zones, instGenerator, instModulator));

	const presetList=parsePresetHeader(presetHeader, presetBag);
	presetList.forEach(a=> parseGenMod(a.zones, presetGenerator, presetModulator));

//	const sortFunc=(a, b)=>{ if( a<b ) return -1; if( a>b ) return 1; return 0; }
//	const bankIDs=presetList.map(a=> a.bankID).filter((a, i, self)=> self.indexOf(a)===i).sort(sortFunc);
//	console.log(bankIDs);
	const insts=instList.map(a=> parseInst(a, samples));
	
	const presets=presetList.map(a=> parsePreset(a, insts));
	
	return data;
    });
    console.log('===== Read SoundFont2 File FINISH =====');
}

export default sf2;

function check(data){
    if( data.type!=='sfbk' ) throw new Error('Sound Fontファイルではありません');
    if( data.data.length!==3 ) throw new Error('Sound Fontファイル形式が不正です');
    if( data.data[0].type!=='INFO' ) throw new Error('Sound Fontの1つ目のチャンクはINFOであるべきです');
    if( data.data[1].type!=='sdta' ) throw new Error('Sound Fontの2つ目のチャンクはsdtaであるべきです');
    if( data.data[2].type!=='pdta' ) throw new Error('Sound Fontの3つ目のチャンクはpdtaであるべきです');

    if( data.data[1].data[0].type!=='smpl' ) throw new Error('sdtaチャンクの１つ目はsmplであるべきです');
    if( data.data[1].data[1] && data.data[1].data[1].type!=='sm24' ) throw new Error('sdtaチャンクのふたつ目のチャンクがsm24ではありません');
    if( data.data[2].data[0].type!=="phdr" ) throw new Error('pdtaのひとつ目のチャンクはphdrであるべきです');
    if( data.data[2].data[1].type!=="pbag" ) throw new Error('pdtaのひとつ目のチャンクはpbagであるべきです');
    if( data.data[2].data[2].type!=="pmod" ) throw new Error('pdtaのひとつ目のチャンクはpmodであるべきです');
    if( data.data[2].data[3].type!=="pgen" ) throw new Error('pdtaのひとつ目のチャンクはpgenであるべきです');
    if( data.data[2].data[4].type!=="inst" ) throw new Error('pdtaのひとつ目のチャンクはinstであるべきです');
    if( data.data[2].data[5].type!=="ibag" ) throw new Error('pdtaのひとつ目のチャンクはibagであるべきです');
    if( data.data[2].data[6].type!=="imod" ) throw new Error('pdtaのひとつ目のチャンクはimodであるべきです');
    if( data.data[2].data[7].type!=="igen" ) throw new Error('pdtaのひとつ目のチャンクはigenであるべきです');
    if( data.data[2].data[8].type!=="shdr" ) throw new Error('pdtaのひとつ目のチャンクはshdrであるべきです');
    return data;
};
