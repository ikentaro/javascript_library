import context from './audio/context.js'
import viewer from './audio/viewer.js'

window.audio=window.audio || {
    context: context,

    viewer: viewer,
}

console.log('===== audio module print =====');
console.log(window.audio);


