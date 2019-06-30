import context from './audio/context.js'
import viewer from './audio/viewer.js'
import create from './audio/create.js'

window.audio=window.audio || {
    context: context,
    create: create,
    
    viewer: viewer,
}

console.log('===== audio module print =====');
console.log(window.audio);


