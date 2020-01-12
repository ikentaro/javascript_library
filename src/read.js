import riff from './read/riff.js'

const read={
    riff: riff,
}

window.read=window.read || read;

if( window.read===read ) console.log('read Module Loaded');
