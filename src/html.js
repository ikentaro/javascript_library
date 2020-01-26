import add from './html/add.js'
import set from './html/set.js'

const html={
    add: add,
    set: set,
}

window.html=window.html || html;

if( html===window.html ) console.log('>>>>> html Module Loaded <<<<<');
