import riff from './read/riff.js'
import sf2  from './read/sf2.js'

const read={
    riff: riff,
    sf2:  (filepath)=>{ return sf2(riff(filepath)); },
}

window.read=window.read || read;

if( window.read===read ) console.log('>>>>> read Module Loaded <<<<<');
