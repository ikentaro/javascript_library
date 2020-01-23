import add from './html/add.js'

const html={
    add: add,
}

window.html=window.html || html;

if( html===window.html ) console.log('>>>>> html Module Loaded <<<<<');
