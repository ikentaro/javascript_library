import Preset from './Preset.js'

const parsePreset=(presetHeader, instList)=>{
    presetHeader.zones.forEach(a=>{
         delete a.genStart;
         delete a.genEnd;
         delete a.modStart;
         delete a.modEnd;
    });

    let globalZone;
    if( presetHeader.zones[0].generators.instrument==null ) globalZone=presetHeader.zones[0];
//    else console.log('Mo GlobalZones');

    const zones=[];
    for( let i=0; i<presetHeader.zones.length; i++ ){
	if( presetHeader.zones[i].generators.instrument==null && i===0 && globalZone!=null ) continue;
	if( presetHeader.zones[i].generators.instrument==null && i!==0 && globalZone==null ) throw new Error('!!!!! Preset['+presetHeader.name+'] zone not found instrument !!!!!');

	presetHeader.zones[i].generators.instrument=instList[i];
	zones.push(presetHeader.zones[i]);
    }
    return new Preset(presetHeader.name, presetHeader.MIDINumber, presetHeader.bankID, globalZone, presetHeader.zones, presetHeader.library, presetHeader.generator, presetHeader.morphology);
}

export default parsePreset;
