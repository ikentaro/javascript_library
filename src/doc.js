import get from './doc/get.js'

const doc={
    get: get,
}

window.doc=window.doc || doc;

if( doc===window.doc ) console.log('>>>>> doc Module Loaded <<<<<'); 


