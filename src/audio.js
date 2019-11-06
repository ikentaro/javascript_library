import context  from './audio/context.js'
import viewer   from './audio/viewer.js'
import create   from './audio/create.js'
import connect  from './audio/connect.js'

import module from './audio/module.js'

import setGainControl from './audio/setGainControl.js'
import setQvalControl from './audio/setQvalControl.js'
import setFreqControl from './audio/setFreqControl.js'
import setDetuneControl from './audio/setDetuneControl.js'
import setDelayControl  from './audio/setDelayControl.js'
import setFeedbackControl from './audio/setFeedbackControl.js'
import setMixControl from './audio/setMixControl.js'
import setStateControl from './audio/setStateControl.js'
import setSmoothingTimeControl from './audio/setSmoothingTimeControl.js'

import setFilterOption  from './audio/setFilterOption.js'
import setOscillatorType from './audio/setOscillatorType.js'

window.audio=window.audio || {
    context: context,
    create:  create,
    connect: connect,
    
    viewer: viewer,
    module: module,
    
    setGainControl:          setGainControl,
    setQvalControl:          setQvalControl,
    setFreqControl:          setFreqControl,
    setDetuneControl:        setDetuneControl,
    setDelayControl:         setDelayControl,
    setFilterOption:         setFilterOption,
    setFeedbackControl:      setFeedbackControl,
    setMixControl:           setMixControl,
    setStateControl:         setStateControl,
    setSmoothingTimeControl: setSmoothingTimeControl,
    setOscillatorType:       setOscillatorType,
}

console.log('===== audio module print =====');
console.log(window.audio);


