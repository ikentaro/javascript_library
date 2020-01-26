import Inst from './Inst.js'

const parseInst=(instHeader, sampleList)=>{
    instHeader.zones.forEach(a=>{
	delete a.genStart;
	delete a.genEnd;
	delete a.modStart;
	delete a.modEnd;
    });

    let globalZone;
    if( instHeader.zones[0].generators.sample_id==null ) globalZone=instHeader.zones[0];

    const zones=[];
    for( let i=0; i<instHeader.zones.length; i++ ){
	if( instHeader.zones[i].generators.sample_id==null && i===0 && globalZone!=null ) continue;
        if( instHeader.zones[i].generators.sample_id==null && i!==0 && globalZone==null ) throw new Error('!!!!! Inst['+instHeader.name+'] zone not found instrument !!!!!');
      
        if( instHeader.zones[i].generators.sample_id==null ) throw new Error('!!!!! Inst['+instHeader.name+'] zone not found instrument !!!!!');
	delete instHeader.zones[i].generators.sample_id;
	instHeader.zones[i].generators.sample=sampleList[i];
	zones.push(instHeader.zones[i]);
    }

    return new Inst(instHeader.name, globalZone, instHeader.zones);    
}

export default parseInst;
