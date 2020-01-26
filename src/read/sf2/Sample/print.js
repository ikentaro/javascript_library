const print=(sample)=>{
    let str='===== SF2::Sample Print =====\n';
    str += 'Name : '+sample.name+'\n';
    str += 'Data.length : '+sample.data.length;
    str += ' ( Loop ['+sample.loopStart+': '+sample.loopEnd+' ] )\n';
    str += 'Sampling Rate : '+sample.samplingRate+'\n';
    str += 'Origin Pitch  : '+sample.originPitch+'\n';
    str += 'Correction    : '+sample.correction+'\n';
    str += '      link    : '+sample.link+'\n';
    str += '      type    : '+sample.type+'\n';
    
    console.log(str);
}

export default print;
