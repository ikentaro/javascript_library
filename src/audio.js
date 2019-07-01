import context  from './audio/context.js'
import viewer   from './audio/viewer.js'
import create   from './audio/create.js'
import setGainControl from './audio/setGainControl.js'

window.audio=window.audio || {
    context: context,
    create: create,
    
    viewer: viewer,
    setGainControl: setGainControl,
}

console.log('===== audio module print =====');
console.log(window.audio);


